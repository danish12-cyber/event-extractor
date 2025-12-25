import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import 'animate.css';

function Home() {
  return (
    <div className="container text-center mt-5 pt-5">
      <div className="py-5">
        <h1 className="display-3 fw-bold text-dark mb-3 animate__animated animate__fadeInDown">
          Welcome to <span className="text-primary">NewsBook</span>
        </h1>
        <p className="lead text-secondary mb-5 animate__animated animate__fadeInUp" style={{ opacity: 1, fontWeight: "500" }}>
          Extract key events, summaries, and dates from any news article in seconds.
        </p>

        <div className="animate__animated animate__zoomIn">
          <Link to="/extractor" className="btn btn-primary btn-lg shadow-lg me-3 px-5 py-3 fw-bold" 
                style={{ borderRadius: "50px" }}>
            🚀 Start Extracting
          </Link>
          <Link to="/history" className="btn btn-outline-primary btn-lg shadow-lg px-5 py-3 fw-bold" 
                style={{ borderRadius: "50px" }}>
            📜 View History
          </Link>
        </div>
      </div>

      <div id="features" className="row mt-5">
        {[
            { title: "Smart Extraction", icon: "🧠", text: "Uses BERT & BART models to understand context." },
            { title: "Auto-Summary", icon: "📝", text: "Condenses long articles into quick summaries." },
            { title: "Global Access", icon: "🌍", text: "Works on BBC, CNN, Dawn, and more." }
        ].map((feature, i) => (
            <div className="col-md-4 mb-4" key={i}>
                <div className="card h-100 border-0 shadow-sm p-4 animate__animated animate__fadeInUp" 
                     style={{ 
                       animationDelay: `${0.2 + (i * 0.2)}s`, 
                       borderRadius: "20px", 
                       background: "rgba(255, 255, 255, 0.05)", 
                       backdropFilter: "blur(10px)",
                       border: "1px solid rgba(255, 255, 255, 0.1)",
                       color: "#fff" 
                     }}>
                    <div className="display-4 mb-3 text-primary" style={{ textShadow: "0 0 20px rgba(108, 92, 231, 0.5)" }}>{feature.icon}</div>
                    <h4 className="fw-bold">{feature.title}</h4>
                    <p className="text-secondary">{feature.text}</p>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
