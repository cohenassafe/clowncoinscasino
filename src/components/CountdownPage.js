import React, { useState, useEffect } from 'react';

const CountdownPage = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [isExpired, setIsExpired] = useState(false);

  // Target date: December 31, 2025 at 23:59:59
  const targetDate = new Date('2025-12-31T23:59:59').getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setIsExpired(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const handleNotifyClick = () => {
    const event = new CustomEvent('openModal');
    window.dispatchEvent(event);
  };

  return (
    <div className="countdown-page">
      
      <div className="countdown-content">
        <div className="title-section">
          <h1 className="main-title">
            <span className="title-line">Clown</span>
            <span className="title-line">Coins</span>
            <span className="title-line">Casino</span>
          </h1>
          <p className="subtitle">Coming Soon</p>
        </div>

        <div className="timer-section">
          {!isExpired ? (
            <div className="countdown-timer">
              <div className="time-unit">
                <span className="time-number">{timeLeft.days.toString().padStart(2, '0')}</span>
                <span className="time-label">Days</span>
              </div>
              <div className="time-separator">:</div>
              <div className="time-unit">
                <span className="time-number">{timeLeft.hours.toString().padStart(2, '0')}</span>
                <span className="time-label">Hours</span>
              </div>
              <div className="time-separator">:</div>
              <div className="time-unit">
                <span className="time-number">{timeLeft.minutes.toString().padStart(2, '0')}</span>
                <span className="time-label">Minutes</span>
              </div>
              <div className="time-separator">:</div>
              <div className="time-unit">
                <span className="time-number">{timeLeft.seconds.toString().padStart(2, '0')}</span>
                <span className="time-label">Seconds</span>
              </div>
            </div>
          ) : (
            <div className="expired-message">
              <h2>We're Here!</h2>
              <p>The wait is over - ClownCoins Casino is now live!</p>
            </div>
          )}
        </div>

        <div className="button-section">
          <button 
            className="notify-button" 
            onClick={handleNotifyClick}
            aria-label="Get notified before everyone else"
          >
            Get Notified Before Everyone Else
          </button>
        </div>

        <div className="legal-footer">
          <p>No purchase necessary. 18+. Void where prohibited.</p>
        </div>
      </div>
    </div>
  );
};

export default CountdownPage;
