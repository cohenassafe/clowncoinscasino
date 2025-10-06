import React from 'react';

const CountdownPage = () => {
  const handleNotifyClick = () => {
    const event = new CustomEvent('openTypeformModal');
    document.dispatchEvent(event);
  };

  return (
    <div className="coming-soon-page">
      {/* Hidden SEO Content */}
      <div style={{ display: 'none' }}>
        <h1>Clown Coins Casino - Free Social Casino with Sweepstakes Prizes</h1>
        <p>Clown Coins Casino is a fun social casino platform where you can play premium slots for free, collect sweep coins, and win amazing prizes through sweepstakes. No real money required, no purchase necessary, just pure entertainment and excitement!</p>
        <h2>Social Casino Features</h2>
        <ul>
          <li>Premium slots games completely free to play</li>
          <li>Collect sweep coins and redeem for prizes</li>
          <li>Daily free coins and bonus rewards</li>
          <li>Social features - play with friends</li>
          <li>Sweepstakes prizes - no purchase necessary</li>
          <li>18+ entertainment, fun for everyone</li>
        </ul>
      </div>

      <div className="coming-soon-content">
        <h2 className="casino-title">
          <span className="title-word">Clown</span>
          <span className="title-word">Coins</span>
          <span className="title-word">Casino</span>
        </h2>
        
        <div className="coming-soon-subtext">
          <p>Play premium slots, collect sweep coins, and win amazing prizes! The ultimate social casino experience with no real money required. Join thousands of players having fun!</p>
        </div>

        <button 
          className="notify-me-button" 
          onClick={handleNotifyClick}
          aria-label="Join Clown Coins Casino - Free Social Casino with Sweepstakes Prizes"
        >
Join The Fun
        </button>

        <div className="footer-disclaimer">
          <p>18+ • Free to Play • Sweepstakes Prizes • No Purchase Necessary</p>
        </div>
      </div>
    </div>
  );
};

export default CountdownPage;