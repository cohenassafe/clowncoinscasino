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
        <h1>Clown Coins Casino - Premium Online Casino Platform</h1>
        <p>Clown Coins Casino is a licensed and regulated online casino platform featuring premium slots, instant payouts, VIP rewards, and exclusive tournaments. Our social casino experience offers fair play guarantees, secure gaming, and 18+ responsible gambling.</p>
        <h2>Casino Features</h2>
        <ul>
          <li>Premium online slots with instant payouts</li>
          <li>VIP rewards program with exclusive benefits</li>
          <li>Casino tournaments and competitions</li>
          <li>Licensed and regulated gaming platform</li>
          <li>Fair play guaranteed with secure transactions</li>
          <li>18+ responsible gambling environment</li>
        </ul>
      </div>

      <div className="coming-soon-content">
        <h2 className="casino-title">
          <span className="title-word">Clown</span>
          <span className="title-word">Coins</span>
          <span className="title-word">Casino</span>
        </h2>
        
        <div className="coming-soon-subtext">
          <p>Experience the future of online gaming with premium slots, instant payouts, and exclusive VIP rewards. The ultimate social casino is coming soon.</p>
        </div>

        <button 
          className="notify-me-button" 
          onClick={handleNotifyClick}
          aria-label="Get early access to Clown Coins Casino - Premium Online Casino Platform"
        >
          Get Early Access
        </button>

        <div className="footer-disclaimer">
          <p>18+ • Licensed & Regulated • Fair Play Guaranteed</p>
        </div>
      </div>
    </div>
  );
};

export default CountdownPage;