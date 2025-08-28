import axios from "axios";
import dotenv from "dotenv";
import { getCollectionIdByName } from "./helpers/chromaUtils.js";
dotenv.config();

const CHROMA_URL = "http://localhost:8000";
const COLLECTION_NAME = "maintstar-meta";

const question =
  process.argv[2] || "How do I create a work order in the system?";

const CUTOFF = 0.2; // cosine similarity threshold

// --- Call OpenAI to embed a string ---
async function getEmbedding(text) {
  const response = await axios.post(
    "https://api.openai.com/v1/embeddings",
    {
      input: text,
      model: "text-embedding-3-small",
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
    }
  );
  return response.data.data[0].embedding;
}

// --- Search ChromaDB for top matches ---
async function queryChroma(queryEmbedding) {
  const collectionId = await getCollectionIdByName(COLLECTION_NAME, CHROMA_URL);

  const res = await axios.post(
    `${CHROMA_URL}/api/v1/collections/${collectionId}/query`,
    {
      query_embeddings: [queryEmbedding],
      n_results: 10,
      include: ["metadatas", "documents", "distances"],
    }
  );

  return res.data;
}

async function run() {
  try {
    const queryEmbedding = await getEmbedding(question);
    const results = await queryChroma(queryEmbedding);

    const top = results;
    if (!top) {
      console.log("No results from ChromaDB.");
      return;
    }

    const filtered = top.metadatas
      .map((meta, i) => ({
        id: top.ids[i],
        filename: meta.filename,
        similarity: 1 - top.distances[i], // Chroma gives distance, so we flip it
      }))
      .filter((item) => item.similarity >= CUTOFF)
      .sort((a, b) => b.similarity - a.similarity);

    if (filtered.length === 0) {
      console.log("⚠️ No documents met the similarity threshold.");
    } else {
      console.log("✨ Filtered top matching documents:");
      filtered.forEach((doc, i) => {
        console.log(
          `#${i + 1}: ${doc.filename} (similarity: ${doc.similarity.toFixed(
            3
          )})`
        );
      });
    }
  } catch (err) {
    console.error("❌ Error:", err.response?.data || err.message);
  }
}

run();
