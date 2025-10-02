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
          <p>Don’t be a clown 🤡, sign up now and be the first to know.</p>
        </div>

        <button 
          className="notify-me-button" 
          onClick={handleNotifyClick}
          aria-label="Get notified when we launch"
        >
          Be the First to Know
        </button>

        <div className="footer-disclaimer">
          <p>18+. No purchase necessary. Void where prohibited.</p>
        </div>
      </div>
    </div>
  );
};

export default CountdownPage;