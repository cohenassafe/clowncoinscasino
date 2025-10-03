import React from 'react';

const CountdownPage = () => {
  const handleNotifyClick = () => {
    const event = new CustomEvent('openTypeformModal');
    document.dispatchEvent(event);
  };

  return (
    <div className="coming-soon-page">
      <div className="coming-soon-content">
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="casino-title">
              <span className="title-word">Clown</span>
              <span className="title-word">Coins</span>
              <span className="title-word">Casino</span>
            </h1>
            
            <div className="coming-soon-subtext">
              <p>Join the ultimate social gaming experience. Premium slots, exciting tournaments, and exclusive rewards await.</p>
            </div>
          </div>

          <button 
            className="notify-me-button" 
            onClick={handleNotifyClick}
            aria-label="Get early access to Clown Coins Casino"
          >
            Get Early Access
          </button>

          <div className="footer-disclaimer">
            <p>18+. No purchase necessary. Void where prohibited. Play responsibly.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownPage;