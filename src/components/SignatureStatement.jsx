import React from 'react';
import './SignatureStatement.css';
import signatureModelImg from '../assets/images/signature-model.jpg';

const SignatureStatement = () => {
  return (
    <section className="signature-section">
      <div className="signature-container">
        
        {/* Left Section */}
        <div className="signature-left">
          <div className="signature-meta">
            <div className="meta-num-group">
              <span className="meta-number">02 / 05</span>
              <span className="meta-label">SIGNATURE</span>
            </div>
            <span className="meta-line"></span>
          </div>

          <h2 className="signature-title">
            <span>PRESENCE</span>
            <span>IS BUILT IN</span>
            <span>THE <em>DETAILS.</em></span>
          </h2>

          <div className="accent-line"></div>

          <p className="signature-description">
            More than just a look, it’s a discipline — refined through movement, 
            awareness and consistent effort. Presence isn’t given, it’s developed.
          </p>
        </div>

        {/* Center Image Section */}
        <div className="signature-center">
          <div className="image-wrapper">
            <img 
              src={signatureModelImg} 
              alt="Arslan Modniva Signature" 
              loading="lazy"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="signature-right">
          <ul className="signature-tags">
            <li>FASHION</li>
            <li className="tag-sep"></li>
            <li>EDITORIAL</li>
            <li className="tag-sep"></li>
            <li>COMMERCIAL</li>
            <li className="tag-sep"></li>
            <li>CASTING</li>
          </ul>

          <div className='signature-brand-content'>
            <div className="signature-brand">
              <span className='brand-name'>ARSLAN </span>
              <span className='brand-name'>MODNIVA</span>
              </div>
              <div className="brand-line"></div>
              </div>
          </div>
      </div>
    </section>
  );
};

export default SignatureStatement;