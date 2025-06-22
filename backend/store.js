// store.js
import fs from "fs";
import axios from "axios";
import dotenv from "dotenv";
import recursiveChunk from "./recursiveChunker.js";
import { generateEmbeddings } from "./embedder.js";
import path from "path";

dotenv.config();

const CHROMA_URL = "http://localhost:8000";
const COLLECTION_NAME = "maintstar-docs";

// WARNING: true means existing collection will be deleted and replaced on, NOT for production, change this code to REPLACE_COLLECTION = false; in production so no existing collections will be deleted everytime only for development thanks
const REPLACE_COLLECTION = true;

// 🔹 Create collection manually
async function ensureCollectionExists() {
  try {
    const res = await axios.get(`${CHROMA_URL}/api/v1/collections`);
    const exists = res.data?.collections?.some(
      (c) => c.name === COLLECTION_NAME
    );

    // 🔥 Delete existing collection if REPLACE_COLLECTION is true
    if (exists && REPLACE_COLLECTION) {
      console.warn("🧨 Deleting existing collection...");
      await axios.delete(`${CHROMA_URL}/api/v1/collections/${COLLECTION_NAME}`);
      console.log("🧼 Deleted collection.");
      exists = false; // Force re-creation
    }

    if (!exists) {
      try {
        const create = await axios.post(`${CHROMA_URL}/api/v1/collections`, {
          name: COLLECTION_NAME,
          metadata: { created_by: "store.js" },
        });
        console.log("✅ Created collection:", create.data);
      } catch (err) {
        if (
          err.response?.data?.error?.includes("UniqueConstraintError") ||
          err.response?.status === 500
        ) {
          console.warn(
            "⚠️ Collection already exists (caught at creation). Continuing..."
          );
        } else {
          throw err; // Only throw if it's a different error
        }
      }
    } else {
      console.log("📚 Collection already exists (from check).");
    }
  } catch (err) {
    console.error(
      "❌ Error in ensureCollectionExists:",
      err.response?.data || err.message
    );
    throw err;
  }
}

// 🔹 Store chunks
async function storeToChroma(filePath) {
  console.log("🚀 storeToChroma starting...");
  await ensureCollectionExists();

  console.log("📁 Attempting to read file at:", filePath);
  const rawText = fs.readFileSync(filePath, "utf-8");
  const chunks = recursiveChunk(rawText, undefined, 800, 0);
  console.log(`📄 File split into ${chunks.length} chunks.`);

  const embedded = await generateEmbeddings(chunks);
  const valid = embedded.filter((item) => item.embedding);

  // Fetch the collection ID
  const collectionsRes = await axios.get(`${CHROMA_URL}/api/v1/collections`);

  console.log("🔍 Raw collectionsRes.data:", collectionsRes.data);

  // 🔍 Chroma returns the array directly (not inside a 'collections' key)
  const collectionList = collectionsRes.data;

  if (!collectionList || !Array.isArray(collectionList)) {
    throw new Error("❌ Could not retrieve collection list from Chroma.");
  }

  const collection = collectionList.find((c) => c.name === COLLECTION_NAME);

  if (!collection) {
    throw new Error(
      `❌ Collection "${COLLECTION_NAME}" not found after creation.`
    );
  }

  const collectionId = collection.id;

  // Post chunks to collection
  const addRes = await axios.post(
    `${CHROMA_URL}/api/v1/collections/${collectionId}/add`,
    {
      ids: valid.map((_, i) => `${filePath.split("/").pop()}-chunk-${i}`),
      documents: valid.map((item) => item.text),
      embeddings: valid.map((item) => item.embedding),
      metadata: valid.map(() => ({
        filename: filePath.split("/").pop(),
      })),
    }
  );

  console.log(`✅ Stored ${valid.length} chunks to ChromaDB.`);
}

// 🔁 Store all .md files in ./docs
const DOCS_DIR = "./docs";

fs.readdir(DOCS_DIR, async (err, files) => {
  if (err) {
    console.error("❌ Error reading docs folder:", err);
    return;
  }

  const mdFiles = files.filter((f) => f.endsWith(".md"));

  for (const file of mdFiles) {
    const fullPath = path.join(DOCS_DIR, file);
    console.log(`\n📂 Processing: ${file}`);
    try {
      await storeToChroma(fullPath);
    } catch (err) {
      console.error(`❌ Failed to store ${file}:`, err.message);
    }
  }

  console.log("✅ All files processed.");
});
