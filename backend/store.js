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

function extractChapterId(filename) {
  return filename.split(" ")[0]; // everything before the first space
}

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

const metadataCollection = "maintstar-meta";

const docSummaries = [
  {
    id: "CH1",
    filename: "CH1 - Work Orders.txt",
    description: "Main documentation about work order lifecycle and planning",
  },
  {
    id: "CH1_3",
    filename: "CH1_3 - CM Templates.txt",
    description:
      "Instructions for creating and using Corrective Maintenance (CM) work order templates without schedules",
  },
  {
    id: "CH2",
    filename: "CH2 - Preventative Maintenance.txt",
    description:
      "Details about scheduling and maintaining preventative maintenance (PM) tasks",
  },
  {
    id: "CH3",
    filename: "CH3 - Work Request and Portal.txt",
    description:
      "Guide for submitting, managing, and configuring Work Requests through the portal and internal system",
  },
  {
    id: "CH4",
    filename: "CH4 - Notifications.txt",
    description:
      "Instructions for setting up and managing email, SMS, and internal notifications for work orders and requests",
  },
  {
    id: "CH5",
    filename: "CH5 - Assets.txt",
    description:
      "Comprehensive guide to managing enterprise assets including asset types, customization, meters, failure analysis, and reporting",
  },
  {
    id: "CH5_2",
    filename: "CH5_2 - Asset Assessments.txt",
    description:
      "Instructions for configuring and recording asset condition assessments, including rating scales and historical analysis",
  },
  {
    id: "CH5_3",
    filename: "CH5_3 - Asset Acquisitions.txt",
    description:
      "Guide for entering and managing asset acquisitions, including bulk entry and birth certificate creation for new or existing assets",
  },
  {
    id: "CH5_4",
    filename: "CH5_4 - Asset Disposals.txt",
    description:
      "Instructions for retiring assets using the Disposal tool, including status tracking, validation checks, and asset reactivation",
  },
  {
    id: "CH5_5",
    filename: "CH5_5 - Asset Deficiencies.txt",
    description:
      "Guide for using the optional Asset Deficiencies module to document field issues, integrate with GIS, and generate Work Orders",
  },
  {
    id: "CH6",
    filename: "CH6 - Mobile Work Order.txt",
    description:
      "Mobile Work Order guide for using MaintStar on phones and tablets to view, edit, and close work orders, sync GIS data, and operate offline with LEM and asset features",
  },
  {
    id: "CH7",
    filename: "CH7 - KPI Dashboards.txt",
    description:
      "Guide for creating, customizing, and using KPI dashboards to visualize performance data with charts, filters, and SQL-based datasets",
  },
  {
    id: "CH8.2",
    filename: "CH8.2 - Inventory ABC Cycle Counts.txt",
    description:
      "Instructions for setting up and managing ABC inventory cycle counts in MaintStar, including category setup, warehouse filters, counting sheets, and adjustment transactions",
  },
  {
    id: "CH9",
    filename: "CH9 - Asset Lifecycle Module.txt",
    description:
      "Comprehensive guide to the Asset Lifecycle Module in MaintStar, including setup and use of COF, POF, Criticality, Ratings, EOL factors, and Capital Planning tools",
  },
  {
    id: "CH9_3",
    filename: "CH9_3 - Work Planning Module.txt",
    description:
      "Outlines the use of Work Planning in MaintStar EAMS v15 for evaluating activities, optimizing resources, and comparing planned versus actual performance using Activity-Based Management strategies",
  },
];

// 🔁 Create metadata collection if it doesn't exist
async function ensureMetadataCollectionExists() {
  const res = await axios.get(`${CHROMA_URL}/api/v1/collections`);
  const exists = res.data?.some((c) => c.name === metadataCollection);

  if (!exists) {
    await axios.post(`${CHROMA_URL}/api/v1/collections`, {
      name: metadataCollection,
      metadata: { created_by: "store.js" },
    });
    console.log(`✅ Created metadata collection: ${metadataCollection}`);
  } else {
    console.log(
      `📚 Metadata collection "${metadataCollection}" already exists.`
    );
  }
}

// 🔁 Store metadata summaries
async function storeMetadataSummaries() {
  console.log("🔍 Embedding metadata summaries...");

  await ensureMetadataCollectionExists();

  for (const doc of docSummaries) {
    try {
      const embedding = await generateEmbeddings([doc.description]);

      const payload = {
        ids: [doc.id],
        documents: [doc.description],
        embeddings: [embedding[0].embedding],
        metadata: [{ filename: doc.filename }],
      };

      // Get the collection ID (UUID) from Chroma
      const collectionsRes = await axios.get(
        `${CHROMA_URL}/api/v1/collections`
      );
      const metaCollection = collectionsRes.data.find(
        (c) => c.name === metadataCollection
      );

      if (!metaCollection) {
        throw new Error(`Collection "${metadataCollection}" not found.`);
      }

      const collectionId = metaCollection.id;

      // Now post using the collection UUID
      await axios.post(
        `${CHROMA_URL}/api/v1/collections/${collectionId}/upsert`,
        payload
      );

      console.log(`✅ Stored metadata for: ${doc.id}`);
    } catch (err) {
      console.error(
        `❌ Failed to store metadata for ${doc.filename}:`,
        err.response?.data || err.message
      );
    }
  }
}

// 🔹 Store chunks
async function storeToChroma(filePath) {
  console.log("🚀 storeToChroma starting...");
  await ensureCollectionExists();

  console.log("📁 Attempting to read file at:", filePath);
  const rawText = fs.readFileSync(filePath, "utf-8");
  const chunks = recursiveChunk(rawText, undefined, 200, 0);
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

  const rawFilename = filePath.split("/").pop(); // e.g. "CH8.2 - Inventory ABC Cycle Counts.txt"
  const chapter = extractChapterId(rawFilename);

  // Post chunks to collection
  const addRes = await axios.post(
    `${CHROMA_URL}/api/v1/collections/${collectionId}/add`,
    {
      ids: valid.map((_, i) => `${filePath.split("/").pop()}-chunk-${i}`),
      documents: valid.map((item) => item.text),
      embeddings: valid.map((item) => item.embedding),
      metadata: valid.map(() => ({
        chapter,
      })),
    }
  );

  console.log(`✅ Stored ${valid.length} chunks to ChromaDB.`);
}

(async () => {
  try {
    console.log("⏳ Starting full ChromaDB storage process...");

    // Step 1: Store metadata embeddings
    //await storeMetadataSummaries();

    // Step 2: Store chunked documents
    const DOCS_DIR = "./docsMd";
    const files = fs.readdirSync(DOCS_DIR);
    const txtFiles = files.filter((f) => f.endsWith(".md"));

    for (const file of txtFiles) {
      const fullPath = path.join(DOCS_DIR, file);
      console.log(`\n📂 Processing: ${file}`);
      try {
        await storeToChroma(fullPath);
      } catch (err) {
        console.error(`❌ Failed to store ${file}:`, err.message);
      }
    }

    console.log("✅ All metadata and document chunks processed.");
  } catch (err) {
    console.error("🚨 Top-level error:", err.message);
  }
})();
