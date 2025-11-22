import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar.jsx';
import '../App.css';

const Home = () => {
  useEffect(() => {
    document.title = 'Fit-Explore Website';
  }, []);

  return (
    <div>
      <header className="hero">                
        <Navbar />
        <div>
          <div className="hero-overlay">
            <h1 className="hero-title">
              <span className="script build">BUILD</span>
              <span className="highlight your">YOUR</span>
              <span className="accent body">BODY</span>
              <span className="script strong">STRONG</span>
            </h1>
          </div>
          <button className="cta-btn">GET STARTED</button>
        </div>
      </header>
    </div>
  );
};

export default Home;