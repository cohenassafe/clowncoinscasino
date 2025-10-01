import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: '/assets/icons/step-1.svg',
      title: 'Free Play',
      description: 'Use Clown Coins for free play and sweepstakes. No real money required!'
    },
    {
      id: 2,
      icon: '/assets/icons/step-2.svg',
      title: 'Play & Win',
      description: 'Gain free entries or play with Coins. More ways to win amazing prizes!'
    },
    {
      id: 3,
      icon: '/assets/icons/step-3.svg',
      title: 'Win Prizes',
      description: 'Prizes awarded per official rules. Real rewards for real winners!'
    }
  ];

  return (
    <section className="how-it-works">
      <div className="container">
        <h2 className="section__title">How it works</h2>
        <div className="steps">
          {steps.map((step) => (
            <div key={step.id} className="step">
              <div className="step__icon">
                {/* STEP ICON: Replace with 96x96 SVG in /assets/icons */}
                <img 
                  src={step.icon} 
                  alt={step.title} 
                  className="step__img"
                />
              </div>
              <h3 className="step__title">{step.title}</h3>
              <p className="step__description">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
