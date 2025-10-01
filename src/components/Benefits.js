import React from 'react';

const Benefits = () => {
  const benefits = [
    {
      id: 1,
      icon: '/assets/icons/benefit-1.svg',
      title: '100% Free to Play',
      description: 'No purchase necessary. Play with Clown Coins and win real prizes through sweepstakes.'
    },
    {
      id: 2,
      icon: '/assets/icons/benefit-2.svg',
      title: 'Real Prizes',
      description: 'Win amazing prizes including gift cards, electronics, and more through our sweepstakes system.'
    },
    {
      id: 3,
      icon: '/assets/icons/benefit-3.svg',
      title: 'Fair & Transparent',
      description: 'All games and sweepstakes are conducted fairly with clear rules and transparent prize distribution.'
    }
  ];

  return (
    <section className="benefits">
      <div className="container">
        <h2 className="section__title">Why Choose ClownCoins?</h2>
        <div className="benefits__list">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="benefit">
              <div className="benefit__icon">
                {/* BENEFIT ICON: Replace with 64x64 SVG in /assets/icons */}
                <img 
                  src={benefit.icon} 
                  alt={benefit.title} 
                  className="benefit__img"
                />
              </div>
              <div className="benefit__content">
                <h3 className="benefit__title">{benefit.title}</h3>
                <p className="benefit__description">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
