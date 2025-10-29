import React from 'react';

const CountdownPage = () => {
  const handleNotifyClick = () => {
    const event = new CustomEvent('openTypeformModal');
    document.dispatchEvent(event);
  };

  return (
    <div className="coming-soon-page">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Clown Coins Casino
          </h1>
          <p className="hero-tagline">Winning feels better here.</p>
          
          <div className="hero-subtext">
            <p>Play for fun. Win real sweepstakes prizes.</p>
          </div>

          <button 
            className="hero-cta-button" 
            onClick={handleNotifyClick}
            aria-label="Join waitlist for Clown Coins Casino"
          >
            GET EARLY ACCESS
          </button>

          <div className="hero-disclaimer">We’ll notify you when Clown Coins launches!</div>

          <div className="hero-trust">
            <div className="trust-badges">
              <span className="trust-badge">18+ Responsible Play</span>
              <span className="trust-badge">Sweepstakes Verified</span>
              <span className="trust-badge">No Purchase Necessary</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hidden SEO Content */}
      <div className="sr-only">
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
    </div>
  );
};

export default CountdownPage;