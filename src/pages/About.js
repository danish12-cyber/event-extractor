import React from 'react';
import 'animate.css';

function About() {
  return (
    <div className="container mt-5 pt-5 animate__animated animate__fadeIn">
      <h2 className="text-center fw-bold mb-4">About Us</h2>
      <p className="text-center text-secondary">
        Event Extractor is an AI-powered tool that summarizes and extracts event triggers, publish dates, 
        and key details from news articles effortlessly.
      </p>
    </div>
  );
}

export default About;
