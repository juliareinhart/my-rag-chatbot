// query.js
import axios from "axios";
import "dotenv/config";
import { generateEmbeddings } from "./embedder.js";

const CHROMA_URL = "http://localhost:8000"; // your running Chroma server
const COLLECTION_NAME = "maintstar-docs";

async function getCollectionId(name) {
  const res = await axios.get(`${CHROMA_URL}/api/v1/collections`);
  console.log("🪵 Chroma collections response:", res.data);
  const collection = res.data.find((c) => c.name === name);
  if (!collection) throw new Error(`Collection "${name}" not found`);
  return collection.id; // UUID
}

/**
 * Query ChromaDB for top-k similar documents to the input question.
 * @param {string} question
 * @param {number} topK
 */

export async function queryChroma(question, topK = 5) {
  try {
    const [result] = await generateEmbeddings([question]);
    const embedding = result.embedding;

    const collectionId = await getCollectionId(COLLECTION_NAME);
    const response = await axios.post(
      `${CHROMA_URL}/api/v1/collections/${collectionId}/query`,
      {
        query_embeddings: [embedding],
        n_results: topK,
      }
    );

    const { ids, documents, distances, metadatas } = response.data;

    const matches = ids[0].map((_, i) => ({
      id: ids[0][i],
      text: documents[0][i],
      score: distances[0][i],
      metadata: metadatas ? metadatas[0][i] : null,
    }));

    const contextText = matches.map((m) => m.text).join("\n---\n");

    const chatCompletion = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content: "You are an expert on MaintStar Public Works software.",
          },
          {
            role: "user",
            content: `Use the following context to answer:\n\n${contextText}\n\nQuestion: ${question}`,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );

    const answer =
      chatCompletion?.data?.choices?.[0]?.message?.content ||
      "No answer returned.";

    return {
      answer,
      matches,
    };
  } catch (err) {
    console.error("❌ Query failed:", err.message);
    throw err;
  }
}

// Example usage with CLI input
if (process.argv[1] === new URL(import.meta.url).pathname) {
  const question = process.argv[2] || "How do I submit a work order?";
  queryChroma(question, 5)
    .then(({ answer, matches }) => {
      console.log(`\n✅ Answer for: "${question}"`);
      console.log(`\n🤖 ${answer}`);

      console.log("\n📚 Top matching chunks:\n");
      matches.forEach((m, i) => {
        console.log(`#${i + 1}:`);
        console.log(`Source: ${m.metadata?.filename}`);
        console.log(`Text: ${m.text}`);
        console.log(`Score: ${m.score.toFixed(4)}\n`);
      });
    })
    .catch(console.error);
}
