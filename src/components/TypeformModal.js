import React, { useState, useEffect } from 'react';

// Global analytics functions (gtag, ga) are loaded via Google Analytics scripts

const TypeformModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Configuration - Your actual Typeform URL
  const TYPEFORM_URL = process.env.REACT_APP_TYPEFORM_URL || 'https://form.typeform.com/to/xCPHxCxN';

  useEffect(() => {
    const handleOpenModal = () => {
      setIsOpen(true);
      setIsLoading(true);
      trackEvent('modal_open', { source: 'button_click' });
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    };

    const handleCloseModal = () => {
      setIsOpen(false);
      setIsLoading(false);
      trackEvent('modal_close', { source: 'user_action' });
      // Restore body scroll
      document.body.style.overflow = 'unset';
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && isOpen) {
        handleCloseModal();
      }
    };

    // Listen for custom events
    document.addEventListener('openTypeformModal', handleOpenModal);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('openTypeformModal', handleOpenModal);
      document.removeEventListener('keydown', handleKeyDown);
      // Cleanup on unmount
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const trackEvent = (eventName, properties = {}) => {
    // Google Analytics 4
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, {
        event_category: 'typeform_modal',
        event_label: 'clowncoins_casino_signup',
        ...properties
      });
    }

    // Console logging for development
    console.log(`📊 Event: ${eventName}`, properties);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
      setIsLoading(false);
      trackEvent('modal_close', { source: 'overlay_click' });
      document.body.style.overflow = 'unset';
    }
  };

  const handleCloseClick = () => {
    setIsOpen(false);
    setIsLoading(false);
    trackEvent('modal_close', { source: 'close_button' });
    document.body.style.overflow = 'unset';
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
    trackEvent('typeform_loaded');
  };

  if (!isOpen) return null;

  return (
    <div className="typeform-modal-overlay" onClick={handleOverlayClick}>
      <div className="typeform-modal-container">
        <div className="typeform-modal-header">
          <h3 className="typeform-modal-title">Get Notified First</h3>
          <p className="typeform-modal-subtitle">Be the first to know when ClownCoins Casino launches!</p>
          <button 
            className="typeform-modal-close" 
            onClick={handleCloseClick}
            aria-label="Close modal"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        
        <div className="typeform-modal-content">
          {isLoading && (
            <div className="typeform-loading">
              <div className="typeform-spinner"></div>
              <p>Loading form...</p>
            </div>
          )}
          
          <iframe
            src={TYPEFORM_URL}
            width="100%"
            height="600"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="ClownCoins Casino - Get Notified"
            onLoad={handleIframeLoad}
            style={{ 
              opacity: isLoading ? 0 : 1,
              transition: 'opacity 0.3s ease'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TypeformModal;