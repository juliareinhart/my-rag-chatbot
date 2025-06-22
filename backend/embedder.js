// embedder.js
// ✅ Calls OpenAI API to generate embeddings from text chunks

import "dotenv/config";
import axios from "axios";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const EMBEDDING_MODEL = "text-embedding-3-small"; // or 'text-embedding-3-large'

/**
 * Generate embeddings for a list of text chunks using OpenAI
 * @param {string[]} texts - An array of text chunks
 * @returns {Promise<Array<{ text: string, embedding: number[] }>>}
 */
export async function generateEmbeddings(texts) {
  if (!OPENAI_API_KEY) throw new Error("Missing OPENAI_API_KEY in .env");

  const results = [];
  for (const text of texts) {
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/embeddings",
        {
          input: text,
          model: EMBEDDING_MODEL,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${OPENAI_API_KEY}`,
          },
        }
      );

      const embedding = response.data.data[0].embedding;
      results.push({ text, embedding });
    } catch (error) {
      console.error(
        "❌ Error embedding text:",
        text.slice(0, 50),
        error.message
      );
      // Optional: push null or throw depending on your use case
      results.push({ text, embedding: null });
    }
  }

  return results;
}

// Example usage (optional test)
// import fs from 'fs';
// const testChunks = ["This is one chunk.", "This is another."];
// generateEmbeddings(testChunks).then(res => fs.writeFileSync('embeddings.json', JSON.stringify(res, null, 2)));
