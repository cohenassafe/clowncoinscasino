import React, { useState, useEffect } from 'react';

const TypeformModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Configuration - Replace with your actual Typeform URL
  const TYPEFORM_URL = process.env.REACT_APP_TYPEFORM_URL || 'FORM_URL';

  useEffect(() => {
    const handleOpenModal = () => {
      setIsOpen(true);
      setIsLoading(true);
      trackEvent('modal_open');
    };

    const handleCloseModal = () => {
      setIsOpen(false);
      setIsLoading(false);
      trackEvent('modal_close');
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && isOpen) {
        handleCloseModal();
      }
    };

    // Listen for custom events
    window.addEventListener('openModal', handleOpenModal);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('openModal', handleOpenModal);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      setIsOpen(false);
      trackEvent('modal_close', { source: 'overlay' });
    }
  };

  const trackEvent = (eventName, properties = {}) => {
    // Google Analytics 4
    if (typeof gtag !== 'undefined') {
      gtag('event', eventName, {
        event_category: 'landing_page',
        event_label: 'clowncoins_casino',
        ...properties
      });
    }
    
    // Console logging for development
    console.log(`📊 Event: ${eventName}`, properties);
  };

  const renderTypeformContent = () => {
    if (TYPEFORM_URL === 'FORM_URL') {
      return (
        <div className="typeform-placeholder">
          <h3>Sign Up Form</h3>
          <p>Please configure your Typeform URL in the TypeformModal component.</p>
          <p>
            Contact: <a href="mailto:contact@clowncoinscasino.com">contact@clowncoinscasino.com</a>
          </p>
        </div>
      );
    }

    return (
      <div className="typeform-widget">
        <iframe
          src={TYPEFORM_URL}
          width="100%"
          height="500"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="ClownCoins Casino Sign Up"
          onLoad={() => setIsLoading(false)}
        />
      </div>
    );
  };

  if (!isOpen) return null;

  return (
    <div className="modal is-open">
      <div 
        className="modal__overlay" 
        onClick={handleOverlayClick}
        aria-hidden="true"
      />
      <div className="modal__content">
        <button 
          className="modal__close" 
          onClick={() => setIsOpen(false)}
          aria-label="Close modal"
        >
          &times;
        </button>
        <div className="modal__body">
          {isLoading && (
            <div className="loading-spinner">
              <div className="spinner"></div>
              <p>Loading form...</p>
            </div>
          )}
          {renderTypeformContent()}
        </div>
      </div>
    </div>
  );
};

export default TypeformModal;
