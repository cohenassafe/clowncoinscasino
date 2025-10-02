import React from 'react';
import clownCoinsImage from '../assets/clowncoinsimage.png';

const CountdownPage = () => {
  const handleNotifyClick = () => {
    const event = new CustomEvent('openTypeformModal');
    document.dispatchEvent(event);
  };

  return (
    <div className="coming-soon-page">
      {/* Dark gradient overlay on the left */}
      <div className="gradient-overlay"></div>
      
      {/* Clown Coins Hero Image */}
      <div className="hero-image-container">
        <img 
          src={clownCoinsImage} 
          alt="Clown Coins Casino" 
          className="hero-image"
        />
      </div>
      
      <div className="coming-soon-content">
        <h1 className="casino-title">
          <span className="title-word">Clown</span>
          <span className="title-word">Coins</span>
          <span className="title-word">Casino</span>
        </h1>
        
        <div className="coming-soon-subtext">
          <p>Social casino fun is almost here. Spin slots, collect sweep coins, and get notified.</p>
        </div>

        <button 
          className="notify-me-button" 
          onClick={handleNotifyClick}
          aria-label="Get notified when we launch"
        >
          Notify Me
        </button>

        <div className="footer-disclaimer">
          <p>18+. No purchase necessary. Void where prohibited.</p>
        </div>
      </div>
    </div>
  );
};

export default CountdownPage;