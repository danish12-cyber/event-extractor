import React, { useEffect, useState } from "react";
import axios from "axios";

const History = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/events/history")
      .then(res => setHistory(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mt-5 pt-4">
      <h2 className="text-center text-dark fw-bold mb-5">
        📜 Extraction History
      </h2>

      {history.length === 0 ? (
        <div className="text-center text-secondary p-5 card bg-white border-0 shadow-sm">
          <h4>No history found yet.</h4>
          <p>Go to the Extractor page to start analyzing news!</p>
        </div>
      ) : (
        <div className="row">
          {history.map((item, index) => (
            <div className="col-md-6 col-lg-4 mb-4" key={index}>
              <div className="card h-100 shadow-sm border-0 animate__animated animate__fadeInUp" 
                   style={{ animationDelay: `${index * 0.1}s`, borderRadius: "15px", background: "rgba(255,255,255,0.95)", color: "#2d3436" }}>
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-2">
                    <small className="text-muted">{item.publishDate || "No Date"}</small>
                    <small className="badge bg-light text-dark">{new Date(item.createdAt).toLocaleDateString()}</small>
                  </div>
                  
                  <h5 className="card-title text-truncate" title={item.url}>
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark fw-bold">
                      News Article
                    </a>
                  </h5>
                  
                  <p className="card-text text-secondary" style={{ fontSize: "0.9rem", display: "-webkit-box", WebkitLineClamp: "3", WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                    {item.summary}
                  </p>

                  <div className="mt-3">
                    {item.events.slice(0, 3).map((ev, i) => (
                      <span key={i} className="badge bg-soft-primary text-primary me-1 mb-1" 
                            style={{ backgroundColor: "#e2e8f0" }}>
                        {ev}
                      </span>
                    ))}
                    {item.events.length > 3 && <small className="text-muted ms-1">+{item.events.length - 3}</small>}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default History;
