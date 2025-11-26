import React from "react";
import "../App.css";
import bgVideo from "../Assets/AboutUs.mp4";

const AboutUs = () => {
  return (
    <div className="about-hero">

      <div className="about-wrapper">

        <div className="about-left">
          <h1 className="about-title">
            ABOUT <span className="highlight">FIT-EXPLORE</span>
          </h1>

          <p className="about-description">
            Fit-Explore is a fitness-driven platform created to empower individuals 
            to become the strongest version of themselves — physically, mentally, 
            and emotionally.  
            <br/><br/>
            Our goal is to provide guidance, structured programs, and a supportive 
            environment where growth becomes a lifestyle.
          </p>

          <div className="about-section">
            <h2 className="about-subtitle">⭐ Vision</h2>
            <p>
              To build a strong, disciplined, and inspired community where fitness 
              becomes a daily mindset — not just a routine.
            </p>
          </div>

          <div className="about-section">
            <h2 className="about-subtitle">🔥 Mission</h2>
            <p>
              Our mission is to guide individuals toward sustainable fitness 
              progress by providing programs, knowledge, and motivation.
            </p>
          </div>

          <div className="about-section">
            <h2 className="about-subtitle">📍 Our Place</h2>
            <p>
              Fit-Explore is proudly located in 
              <span className="bold-orange"> Quezon City, Metro Manila</span>.  
              A supportive fitness environment built for growth and transformation.
            </p>
          </div>

          <div className="about-section library-section">
            <h2 className="about-subtitle">💪 Exercise Library</h2>
            <p>
              A complete collection of workouts designed for strength, endurance, 
              mobility, and fat loss. Each exercise is explained for safety and proper form.
            </p>

            <ul className="library-list">
              <li><strong>• Strength Training:</strong> Squats, Bench Press, Deadlifts.</li>
              <li><strong>• Core Workouts:</strong> Planks, Leg Raises, Twists.</li>
              <li><strong>• HIIT & Conditioning:</strong> Burpees, Battle Ropes, Sprints.</li>
            </ul>

            <p className="library-note">
              Train smarter, safer, and more effectively with our guided exercise list.
            </p>
          </div>
        </div>

        <div className="about-video-card">
          <div className="about-video-overlay"></div>

          <video 
            className="about-video" 
            src={bgVideo}  
            autoPlay 
            loop 
            muted 
            playsInline
          ></video>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;
