import React, { useState } from "react";
import axios from "axios";
import config from "../config";
import "./EventExtractor.css";

function EventExtractor() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const userId = localStorage.getItem("userId");

  const handleExtract = async (e) => {
    e.preventDefault();
    if (!url.trim()) {
      alert("Please paste a news article URL.");
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post(`${config.API_BASE_URL}/api/events/extract`, {
        url,
        userId,
      });

      setResult(res.data);
    } catch (err) {
      console.error(err);
      if (err.response && err.response.data && err.response.data.error) {
        alert("Backend Error: " + err.response.data.error);
      } else {
        alert("Request Failed: " + (err.message || "Unknown error"));
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5 pt-4">
      <div className="card shadow-lg p-5 border-0" 
           style={{ 
             background: "rgba(255, 255, 255, 0.05)", 
             backdropFilter: "blur(10px)",
             border: "1px solid rgba(255, 255, 255, 0.1)",
             borderRadius: "20px" 
           }}>
        <h2 className="text-center mb-4 fw-bold text-primary">🔍 AI Event Extractor</h2>
        <p className="text-center text-muted mb-4">Paste a URL below to automatically extract summary and key events.</p>

        <form onSubmit={handleExtract}>
          <div className="mb-4">
            <input
              type="text"
              className="form-control form-control-lg border-0 shadow-sm"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Paste article URL here (e.g. CNN, BBC)..."
              style={{ borderRadius: "10px", padding: "15px", background: "rgba(0,0,0,0.2)", color: "#fff", border: "1px solid rgba(255,255,255,0.1)" }}
            />
          </div>

          <button className="btn btn-primary w-100 btn-lg shadow-sm" 
                  disabled={loading}
                  style={{ borderRadius: "10px", transition: "all 0.3s" }}>
            {loading ? (
              <span><span className="spinner-border spinner-border-sm me-2"></span>Extracting...</span>
            ) : "🚀 Extract Events"}
          </button>
        </form>

        {result && (
          <div className="mt-5 animate__animated animate__fadeInUp">
            <div className="p-4 rounded-3 mb-4" style={{ backgroundColor: "rgba(0,0,0,0.2)", borderLeft: "5px solid #6c5ce7" }}>
              <h5 className="fw-bold text-dark">📌 Summary</h5>
              <p className="text-secondary">{result.summary}</p>
            </div>

            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="fw-bold m-0">🗓 Publish Date</h5>
              <span className="badge bg-secondary rounded-pill px-3 py-2">{result.publish_date || "Unknown"}</span>
            </div>

            <h5 className="fw-bold mt-4 mb-3">⚡ Extracted Keywords</h5>
            <div className="d-flex flex-wrap gap-2">
              {result.events?.map((ev, i) => (
                <span key={i} className="badge bg-primary px-3 py-2 shadow-sm" 
                      style={{ fontSize: "0.9rem", fontWeight: "500" }}>
                  #{ev}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default EventExtractor;
