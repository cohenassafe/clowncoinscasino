import React from 'react';
import logo from '../assets/clowncoinsimage.png';

const CountdownPage = () => {
  const handleNotifyClick = () => {
    const event = new CustomEvent('openTypeformModal');
    document.dispatchEvent(event);
  };

  return (
    <div className="coming-soon-page">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-header">
            <img src={logo} alt="Clown Coins logo" className="hero-logo" />
            <h1 className="hero-title">
              <span className="hero-title-gradient">Clown Coins</span> <span className="hero-title-solid">Casino</span>
            </h1>
            <p className="hero-tagline">Where fun spins win smiles.</p>
          </div>

          <div className="hero-subtext">
            <p>Play for fun. Win real sweepstakes prizes. 100% legal across the U.S.</p>
          </div>

          <button 
            className="hero-cta-button" 
            onClick={handleNotifyClick}
            aria-label="Get early access to Clown Coins Casino"
          >
            Get Early Access
          </button>
          <div className="hero-disclaimer">We’ll notify you when Clown Coins opens!</div>

          <div className="hero-trust">
            <div className="trust-badges">
              <span className="trust-badge">18+ Responsible Play</span>
              <span className="trust-badge">Sweepstakes Verified</span>
              <span className="trust-badge">No Purchase Necessary</span>
            </div>
            <a href="#official-rules" className="legal-link">View Official Rules →</a>
          </div>
        </div>

        <div className="hero-shimmer" aria-hidden="true"></div>
      </div>

      <section className="how-it-works" aria-label="How it works">
        <h2>How it works</h2>
        <p>Collect coins, play games, and redeem sweepstakes entries for real prizes.</p>
      </section>

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

      <footer className="site-footer">© Clown Coins Casino 2025</footer>
    </div>
  );
};

export default CountdownPage;