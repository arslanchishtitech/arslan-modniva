import React, { useState } from 'react';
import './PresenceInMotion.css';

// Import your image assets here
import mainReelImg from '../assets/images/presence-motion-main.jpg';
import sideTopImg from '../assets/images/presence-motion-01.jpg';
import sideBottomImg from '../assets/images/presence-motion-02.jpg';

const PresenceInMotion = () => {
  const [activeCategory, setActiveCategory] = useState('WALKING');

  const categories = ['WALKING', 'POSING', 'EXPRESSION', 'MOVEMENT'];

  return (
    <section className="presence-motion-section">
      <div className="presence-motion-container">

        {/* TOP HEADER SECTION */}
        <div className="presence-motion-header">
          
          {/* Left Text Box */}
          <div className="presence-motion-left">
            <div className="presence-motion-meta">
              <span className="meta-num">05 / 05</span>
            </div>

            <h2 className="presence-motion-title">
              PRESENCE <br />
              <span className="accent-gold">IN MOTION</span>
            </h2>

            <p className="presence-motion-description">
              Movement is where the story comes alive. From the runway to the camera, 
              every step reveals a different version of me.
            </p>

            <a href="#journey" className="presence-motion-link">
              <span>WATCH MY JOURNEY</span>
              <span className="link-arrow">→</span>
            </a>
          </div>

          {/* Right Navigation Menu */}
          <div className="presence-motion-nav">
            <ul className="nav-list">
              {categories.map((cat) => (
                <li
                  key={cat}
                  className={`nav-item ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* MEDIA GRID SECTION */}
        <div className="presence-motion-grid">

          {/* Main Video Reel Card */}
          <div className="media-main-wrapper">
            <div className="media-main-card">
              <img src={mainReelImg} alt="Arslan Modniva - Presence In Motion" />
              <div className="main-overlay">
                <div className="play-button-group">
                  <div className="play-circle">
                    <span className="play-icon">▲</span>
                  </div>
                  <div className="play-meta">
                    <span className="play-title">WATCH REEL</span>
                    <span className="play-duration">1:24</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Side Cards Container */}
          <div className="presence-motion-side-cards">

            {/* Side Card 01 */}
            <div className="side-card">
              <img src={sideTopImg} alt="Natural Presence" />
              <div className="side-card-overlay">
                <div className="side-card-info">
                  <span className="side-card-title">NATURAL PRESENCE</span>
                  <span className="side-card-year">/ 2024</span>
                </div>
                <span className="side-card-num">02</span>
              </div>
            </div>

            {/* Side Card 02 */}
            <div className="side-card">
              <img src={sideBottomImg} alt="Runway Walk" />
              <div className="side-card-overlay">
                <div className="side-card-info">
                  <span className="side-card-title">RUNWAY WALK</span>
                  <span className="side-card-year">/ 2023</span>
                </div>
                <span className="side-card-num">03</span>
              </div>
            </div>

          </div>

        </div>

        {/* SCROLL INDICATOR */}
        <div className="presence-motion-scroll">
          <span className="scroll-text">SCROLL</span>
          <span className="scroll-arrow">↓</span>
        </div>

      </div>
    </section>
  );
};

export default PresenceInMotion;