import React from 'react';

const CTA = () => {
  const handleCTAClick = () => {
    const event = new CustomEvent('openModal');
    window.dispatchEvent(event);
  };

  return (
    <section className="cta">
      <div className="container">
        <div className="cta__content">
          <h2 className="cta__title">Ready to join the fun?</h2>
          <p className="cta__subtitle">Be among the first to experience ClownCoins Casino</p>
          <button 
            className="btn btn--cta btn--large" 
            onClick={handleCTAClick}
            aria-label="Get early access to ClownCoins Casino"
          >
            Get Early Access
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
