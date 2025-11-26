import React, { useEffect } from 'react';
import '../App.css';
import bgVideo from '../Assets/FitnessBackground.mp4';

const Home = () => {
  useEffect(() => {
    document.title = 'Fit-Explore Website';
  }, []);

  return (
    <div>
      <header className="hero">
        <video 
          className="hero-video" style={{height:"90"}}
          src={bgVideo}
          autoPlay
          loop
          muted
          playsInline
        ></video>

        <div className="hero-overlay"></div>

        <div className="hero-content">
         
          <h1 className="hero-title hero-title-custom">
            <div className="hero-row hero-row-top">
              <span className="script build">BUILD</span>
              <span className="block your">YOUR</span>
            </div>
            <div className="hero-row hero-row-bottom">
              <span className="block body">BODY</span>
              <span className="script strong">STRONG</span>
            </div>
          </h1>
          <button className="cta-btn">GET STARTED</button>
        </div>
      </header>
    </div>
  );
};

export default Home;
