import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';

function Loader() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="text-center">
        <div className="spinner-border text-primary mb-3" role="status" style={{ width: '4rem', height: '4rem' }}>
          <span className="visually-hidden">Loading...</span>
        </div>
        <h4 className="animate__animated animate__pulse animate__infinite">Loading Event Extractor...</h4>
      </div>
    </div>
  );
}

export default Loader;
