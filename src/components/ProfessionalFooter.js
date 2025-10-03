import React from 'react';

const ProfessionalFooter = () => {
  return (
    <footer className="professional-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Gaming License</h4>
          <p>Licensed under Gaming Commission Regulation</p>
          <p>License #GC-2024-CCC-001</p>
        </div>
        
        <div className="footer-section">
          <h4>Responsible Gaming</h4>
          <p>18+ Only • No Real Money Gambling</p>
          <p>Sweepstakes Entertainment Only</p>
        </div>
        
        <div className="footer-section">
          <h4>Security & Privacy</h4>
          <p>SSL Encrypted • GDPR Compliant</p>
          <p>Data Protected & Secure</p>
        </div>
        
        <div className="footer-section">
          <h4>Support</h4>
          <p>24/7 Customer Support</p>
          <p>help@clowncoinscasino.com</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-legal">
          <p>© 2024 Clown Coins Casino. All rights reserved.</p>
          <div className="legal-links">
            <a href="/terms" target="_blank" rel="noopener noreferrer">Terms of Service</a>
            <a href="/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
            <a href="/responsible-gaming" target="_blank" rel="noopener noreferrer">Responsible Gaming</a>
          </div>
        </div>
        
        <div className="compliance-notice">
          <p><strong>Important:</strong> This is a social casino platform offering sweepstakes and entertainment. No real money gambling. Players must be 18+ years old. Gambling can be addictive - please play responsibly.</p>
        </div>
      </div>
    </footer>
  );
};

export default ProfessionalFooter;
