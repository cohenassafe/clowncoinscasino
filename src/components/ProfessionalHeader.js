import React from 'react';
import TrustBadges from './TrustBadges';

const ProfessionalHeader = () => {
  return (
    <header className="professional-header">
      <div className="header-content">
        <div className="logo-section">
          <div className="logo">
            <span className="logo-text">🎪 Clown Coins Casino</span>
          </div>
          <div className="tagline">Premium Social Gaming Experience</div>
        </div>
        
        <div className="header-actions">
          <TrustBadges />
          <div className="header-cta">
            <button 
              className="header-notify-btn"
              onClick={() => {
                const event = new CustomEvent('openTypeformModal');
                document.dispatchEvent(event);
              }}
            >
              Get Early Access
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ProfessionalHeader;
