// src/components/WorkOrderChat.js
import React, { useState } from "react";

function WorkOrderChat() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    setLoading(true);
    const response = await fetch("http://localhost:4000/api/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question }),
    });
    const data = await response.json();
    setAnswer(data.answer);
    setLoading(false);
  };

  return (
    <div className="container my-5">
      <div className="card shadow-sm">
        <div className="card-header bg-primary text-white">
          Ask a Question About Work Orders
        </div>
        <div className="card-body">
          <textarea
            className="form-control mb-3"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask something like 'How do I create a work order?'"
            rows={4}
          />
          <button
            className="btn btn-primary"
            onClick={handleAsk}
            disabled={loading || !question}
          >
            {loading ? "Loading..." : "Ask"}
          </button>

          {answer && (
            <div className="mt-4">
              <h5>Answer:</h5>
              <div className="alert alert-secondary">{answer}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default WorkOrderChat;
