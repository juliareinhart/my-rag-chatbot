import axios from "axios";

// helper function to look up on ChromaDB based on UUID, NOT collection name, bc Chroma can only look up based on UUID
export async function getCollectionIdByName(name, CHROMA_URL) {
  const res = await axios.get(`${CHROMA_URL}/api/v1/collections`);
  const collection = res.data.find((c) => c.name === name);
  if (!collection) throw new Error(`Collection "${name}" not found.`);
  return collection.id;
}
