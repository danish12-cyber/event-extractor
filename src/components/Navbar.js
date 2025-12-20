import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top" 
      style={{
        background: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)"
      }}>
      <div className="container">
        <Link className="navbar-brand fw-bold fs-3 text-primary" to="/" 
          style={{ letterSpacing: "1px", textShadow: "none" }}>
          NewsBook 📰
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon" style={{ filter: "none" }}></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-2">
              <Link className="nav-link text-dark fw-bold" to="/">Home</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link text-dark fw-bold" to="/extractor">Extractor</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link text-dark fw-bold" to="/history">History</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link text-dark fw-bold" to="/about">About Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
