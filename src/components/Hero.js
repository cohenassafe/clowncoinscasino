import React from 'react';

const Hero = () => {
  const handleSubscribeClick = () => {
    const event = new CustomEvent('openModal');
    window.dispatchEvent(event);
  };

  return (
    <section className="hero">
      <div className="container">
        <div className="hero__content">
          <div className="hero__text">
            <h1 className="hero__title">
              ClownCoins Casino is launching
            </h1>
            <p className="hero__subtitle">
              Subscribe now and get first access to the ultimate social casino experience with exciting sweepstakes and amazing prizes!
            </p>
            <button 
              className="btn btn--cta" 
              onClick={handleSubscribeClick}
              aria-label="Subscribe for early access"
            >
              Subscribe Now
            </button>
          </div>
          
          <div className="hero__image">
            {/* HERO IMAGE RIGHT (desktop): Replace hero-placeholder.jpg with your hero image, max 200KB, recommended size 600x600px */}
            <img 
              src="/assets/images/hero-placeholder.jpg" 
              alt="ClownCoins Casino Hero" 
              className="hero__img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
