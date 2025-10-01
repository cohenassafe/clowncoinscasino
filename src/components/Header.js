import React from 'react';

const Header = () => {
  const handleNotifyClick = () => {
    // This will be handled by the TypeformModal component
    const event = new CustomEvent('openModal');
    window.dispatchEvent(event);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__logo">
            {/* LOGO: Replace with your logo SVG/PNG, recommended size 120x40px */}
            <img 
              src="/assets/images/logo.png" 
              alt="ClownCoins Casino" 
              className="logo"
            />
          </div>
          
          <button 
            className="btn btn--primary" 
            onClick={handleNotifyClick}
            aria-label="Get notified when we launch"
          >
            Notify Me
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
