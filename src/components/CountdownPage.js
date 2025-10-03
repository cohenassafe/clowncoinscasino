import React from 'react';
import ProfessionalHeader from './ProfessionalHeader';
import ProfessionalFooter from './ProfessionalFooter';

const CountdownPage = () => {
  const handleNotifyClick = () => {
    const event = new CustomEvent('openTypeformModal');
    document.dispatchEvent(event);
  };

  return (
    <div className="professional-landing-page">
      <ProfessionalHeader />
      
      <main className="main-content">
        <div className="hero-section">
          <div className="hero-content">
            <div className="status-badge">
              <span className="status-indicator"></span>
              <span>Coming Soon</span>
            </div>
            
            <h1 className="casino-title">
              <span className="title-word">Clown</span>
              <span className="title-word">Coins</span>
              <span className="title-word">Casino</span>
            </h1>
            
            <div className="hero-description">
              <h2>The Ultimate Social Gaming Experience</h2>
              <p>Join thousands of players in the most exciting social casino platform. Experience premium slots, thrilling games, and exclusive sweepstakes rewards.</p>
            </div>

            <div className="features-preview">
              <div className="feature-item">
                <div className="feature-icon">🎰</div>
                <span>Premium Slots</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🎁</div>
                <span>Sweepstakes Rewards</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🏆</div>
                <span>Tournaments</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">💎</div>
                <span>VIP Program</span>
              </div>
            </div>

            <button 
              className="cta-button" 
              onClick={handleNotifyClick}
              aria-label="Get early access to Clown Coins Casino"
            >
              <span className="button-text">Get Early Access</span>
              <span className="button-subtext">Be among the first 1000 players</span>
            </button>

            <div className="social-proof">
              <div className="proof-stat">
                <span className="stat-number">10,000+</span>
                <span className="stat-label">Pre-registered Players</span>
              </div>
              <div className="proof-stat">
                <span className="stat-number">$50K+</span>
                <span className="stat-label">Sweepstakes Prizes</span>
              </div>
              <div className="proof-stat">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Customer Support</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <ProfessionalFooter />
    </div>
  );
};

export default CountdownPage;