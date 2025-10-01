import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__links">
            <a href="/partials/terms.html" className="footer__link">Terms of Service</a>
            <a href="/partials/privacy.html" className="footer__link">Privacy Policy</a>
            <a href="mailto:contact@clowncoinscasino.com" className="footer__link">Contact Us</a>
          </div>
          <div className="footer__copyright">
            <p>&copy; 2024 ClownCoins Casino. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
