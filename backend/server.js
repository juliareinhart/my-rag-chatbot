// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { queryChroma } from "./query.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/ask", async (req, res) => {
  const { question } = req.body;

  if (!question) {
    return res.status(400).json({ error: "Question is required." });
  }

  try {
    const { answer } = await queryChroma(question);
    res.json({ answer });
  } catch (err) {
    console.error("❌ API error:", err);
    res.status(500).json({ error: "Failed to process question." });
  }
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`✅ API server running at http://localhost:${PORT}`);
});
