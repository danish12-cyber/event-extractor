import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top" 
      style={{
        background: "rgba(0, 0, 0, 0.2)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)"
      }}>
      <div className="container">
        <Link className="navbar-brand fw-bold fs-3 text-primary" to="/" 
          style={{ letterSpacing: "1px", textShadow: "0 0 10px rgba(108, 92, 231, 0.5)" }}>
          NewsBook 📰
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon" style={{ filter: "invert(1)" }}></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-2">
              <Link className="nav-link text-light fw-bold" to="/">Home</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link text-light fw-bold" to="/dashboard">Dashboard</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link text-light fw-bold" to="/extractor">Extractor</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link text-light fw-bold" to="/history">History</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link text-light fw-bold" to="/about">About Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
