import React from 'react';

const CountdownPage = () => {
  const handleNotifyClick = () => {
    const event = new CustomEvent('openTypeformModal');
    document.dispatchEvent(event);
  };

  return (
    <div className="coming-soon-page">
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