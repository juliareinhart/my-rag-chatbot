# 👩‍💻 Manual RAG Chatbot – Build Your Own AI Assistant (No LangChain)

A full-stack, developer-focused RAG (Retrieval-Augmented Generation) chatbot application where users can upload documents and ask questions about them. Built from scratch using ChromaDB, Node.js, and React — **no LangChain required**.

## 📁 Upload your own docs → 🔍 Embed with ChromaDB → 💬 Chat via frontend

---

## 🚀 Features

📂 Upload and embed markdown/PDF documents  
🔎 Document retrieval via ChromaDB (Python server)  
💬 Chatbot frontend with real-time Q&A  
🧠 Manual RAG pipeline using OpenAI embeddings + cosine similarity  
🛠 Easy to test via terminal or browser  

---

## 🛠 Tech Stack

**Frontend**: React + Bootstrap  
**Backend**: Node.js + Express  
**Database / Vector Store**: ChromaDB (Python)  
**AI**: OpenAI API (`gpt-3.5-turbo`)

---

## 📹 YouTube Demo

[![Watch the video](https://img.youtube.com/vi/YOUR_VIDEO_ID_HERE/0.jpg)](https://www.youtube.com/watch?v=YOUR_VIDEO_ID_HERE)

---

## ⚙️ Setup Instructions

💡 Note: This app is intended for developers and requires your own OpenAI API key and Python environment.

### 1. Clone the Repo

```bash
git clone https://github.com/juliareinhart/my-rag-chatbot.git
cd my-rag-chatbot
```

### 2. Install Dependencies
**Backend (Node.js)**
```bash
cd backend
npm install
```
**Frontend (React)**
```bash
cd ../frontend/chat-for-workorders
npm install
```
**Start ChromaDB (Python REST Server)**
```bash
chromadb run --path ./chroma-storage
```

### 3. Create Environment Files
**Backend .env:**
```bash
OPENAI_API_KEY=your-openai-key
```

### 4. Store Your Documents as Embeddings

```bash
node store.js
```
This will process and embed your documents into ChromaDB using OpenAI embeddings.

### 5. Test with a Terminal Query
```bash
node query.js "How do I create a work order?"
```

### 6. Run the App

**Start Backend Server**
```bash
cd backend
node index.js
```
**Start Frontend React App**
```bash
cd ../frontend/chat-for-workorders
npm start
```
Open your browser to http://localhost:3000

📂 Folder Structure
```bash
my-rag-chatbot/
├── backend/
│   ├── docs/
│   ├── store.js
│   ├── query.js
│   └── server.js
├── chroma-storage/
├── frontend/
│   └── chat-for-workorders/
│       ├── src/
│       └── public/
└── README.md
```

🙋 About Me

👩‍💻 Built with 💖 by Julia Reinhart
Math graduate, MERN stack developer, Java & MySQL enthusiast, and passionate about empowering developers to build real AI solutions without the bloat.

🔗 [Connect with me on LinkedIn](https://www.linkedin.com/in/julia-reinhart-798aa6258/)
