import React from 'react';

const TrustBadges = () => {
  return (
    <div className="trust-badges">
      <div className="trust-badge">
        <div className="badge-icon">🔒</div>
        <span>SSL Secured</span>
      </div>
      <div className="trust-badge">
        <div className="badge-icon">🛡️</div>
        <span>Licensed Gaming</span>
      </div>
      <div className="trust-badge">
        <div className="badge-icon">⚖️</div>
        <span>18+ Only</span>
      </div>
      <div className="trust-badge">
        <div className="badge-icon">🎯</div>
        <span>Fair Play</span>
      </div>
    </div>
  );
};

export default TrustBadges;
