import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import EventExtractor from './pages/EventExtractor';
import History from './pages/History';
import About from './pages/About';
import Loader from './components/Loader';
import PageTransition from './components/PageTransition';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <Router>
      <Navbar />
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop />
      <div className="main-content" style={{ marginTop: '80px' }}>
        <Routes>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/extractor" element={<PageTransition><EventExtractor /></PageTransition>} />
          <Route path="/history" element={<PageTransition><History /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
