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
          <p>Experience the future of crypto gaming with premium slots, instant withdrawals, and exclusive VIP rewards.</p>
        </div>

        <button 
          className="notify-me-button" 
          onClick={handleNotifyClick}
          aria-label="Get early access to Clown Coins Casino"
        >
Join The Revolution
        </button>

        <div className="footer-disclaimer">
          <p>18+ • Licensed & Regulated • Fair Play Guaranteed</p>
        </div>
      </div>
    </div>
  );
};

export default CountdownPage;