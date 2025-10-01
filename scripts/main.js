/**
 * Main JavaScript for ClownCoins Casino Landing Page
 * Handles Typeform modal, analytics tracking, and user interactions
 */

// Configuration
const CONFIG = {
  // TYPEFORM: Replace with your actual Typeform embed URL
  typeformUrl: 'FORM_URL',
  analytics: {
    // Add your analytics tracking ID here
    trackingId: null, // e.g., 'GA_TRACKING_ID' for Google Analytics
    events: {
      pageView: 'page_view',
      ctaClick: 'cta_click',
      formSubmit: 'form_submit',
      modalOpen: 'modal_open',
      modalClose: 'modal_close'
    }
  }
};

// DOM Elements
const elements = {
  notifyBtn: document.getElementById('notifyBtn'),
  subscribeBtn: document.getElementById('subscribeBtn'),
  finalCtaBtn: document.getElementById('finalCtaBtn'),
  typeformModal: document.getElementById('typeformModal'),
  modalOverlay: document.getElementById('modalOverlay'),
  modalClose: document.getElementById('modalClose'),
  typeformWidget: document.querySelector('.typeform-widget')
};

// State Management
const state = {
  isModalOpen: false,
  hasInteracted: false,
  formSubmitted: false
};

/**
 * Initialize the application
 */
function init() {
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupEventListeners);
  } else {
    setupEventListeners();
  }
  
  // Track page view
  trackEvent(CONFIG.analytics.events.pageView);
  
  // Setup intersection observer for animations
  setupIntersectionObserver();
  
  // Handle form URL replacement
  setupTypeformWidget();
  
  console.log('ClownCoins Casino landing page initialized');
}

/**
 * Setup event listeners
 */
function setupEventListeners() {
  // Modal controls
  if (elements.notifyBtn) {
    elements.notifyBtn.addEventListener('click', openModal);
  }
  
  if (elements.subscribeBtn) {
    elements.subscribeBtn.addEventListener('click', openModal);
  }
  
  if (elements.finalCtaBtn) {
    elements.finalCtaBtn.addEventListener('click', openModal);
  }
  
  if (elements.modalOverlay) {
    elements.modalOverlay.addEventListener('click', closeModal);
  }
  
  if (elements.modalClose) {
    elements.modalClose.addEventListener('click', closeModal);
  }
  
  // Keyboard navigation
  document.addEventListener('keydown', handleKeydown);
  
  // Window events
  window.addEventListener('resize', handleResize);
  
  // Form submission tracking
  setupFormTracking();
}

/**
 * Open the Typeform modal
 */
function openModal(event) {
  event.preventDefault();
  
  if (state.isModalOpen) return;
  
  state.isModalOpen = true;
  state.hasInteracted = true;
  
  // Track modal open event
  trackEvent(CONFIG.analytics.events.modalOpen, {
    source: event.target.id || 'unknown',
    timestamp: Date.now()
  });
  
  // Show modal
  if (elements.typeformModal) {
    elements.typeformModal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    
    // Focus management for accessibility
    const focusableElements = elements.typeformModal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    if (focusableElements.length > 0) {
      focusableElements[0].focus();
    }
  }
  
  // Add loading state to buttons
  setButtonLoadingState(true);
}

/**
 * Close the Typeform modal
 */
function closeModal(event) {
  if (!state.isModalOpen) return;
  
  state.isModalOpen = false;
  
  // Track modal close event
  trackEvent(CONFIG.analytics.events.modalClose, {
    source: event?.target?.id || 'unknown',
    timestamp: Date.now()
  });
  
  // Hide modal
  if (elements.typeformModal) {
    elements.typeformModal.classList.remove('is-open');
    document.body.style.overflow = '';
    
    // Return focus to the button that opened the modal
    if (event?.target?.id !== 'modalOverlay') {
      const activeButton = document.activeElement;
      if (activeButton && activeButton.classList.contains('btn')) {
        activeButton.focus();
      }
    }
  }
  
  // Remove loading state from buttons
  setButtonLoadingState(false);
}

/**
 * Handle keyboard navigation
 */
function handleKeydown(event) {
  // Close modal on Escape key
  if (event.key === 'Escape' && state.isModalOpen) {
    closeModal(event);
  }
  
  // Handle Tab key within modal for accessibility
  if (state.isModalOpen && event.key === 'Tab') {
    const focusableElements = elements.typeformModal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    if (event.shiftKey) {
      if (document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      }
    } else {
      if (document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }
  }
}

/**
 * Handle window resize
 */
function handleResize() {
  // Close modal on mobile orientation change if it would break layout
  if (state.isModalOpen && window.innerWidth < 768) {
    // Optional: Close modal on mobile resize
    // closeModal();
  }
}

/**
 * Setup Typeform widget with proper URL
 */
function setupTypeformWidget() {
  if (!elements.typeformWidget || CONFIG.typeformUrl === 'FORM_URL') {
    console.warn('Typeform URL not configured. Please replace FORM_URL with your actual Typeform embed URL.');
    
    // Show placeholder content
    if (elements.typeformWidget) {
      elements.typeformWidget.innerHTML = `
        <div style="padding: 2rem; text-align: center; color: #ccc;">
          <h3>Sign Up Form</h3>
          <p>Please configure your Typeform URL in the CONFIG object.</p>
          <p>Contact: <a href="mailto:contact@clowncoinscasino.com">contact@clowncoinscasino.com</a></p>
        </div>
      `;
    }
    return;
  }
  
  // Update the data-url attribute with the actual form URL
  elements.typeformWidget.setAttribute('data-url', CONFIG.typeformUrl);
}

/**
 * Setup form submission tracking
 */
function setupFormTracking() {
  // Listen for Typeform submission events
  window.addEventListener('message', (event) => {
    if (event.data.type === 'form-submit' || 
        event.data.type === 'typeform-submit' ||
        (event.origin.includes('typeform') && event.data.type)) {
      
      state.formSubmitted = true;
      trackEvent(CONFIG.analytics.events.formSubmit, {
        formType: 'typeform',
        timestamp: Date.now()
      });
      
      // Close modal after successful submission
      setTimeout(() => {
        closeModal();
        showSuccessMessage();
      }, 2000);
    }
  });
}

/**
 * Track analytics events
 */
function trackEvent(eventName, properties = {}) {
  // Google Analytics 4
  if (typeof gtag !== 'undefined') {
    gtag('event', eventName, {
      event_category: 'landing_page',
      event_label: 'clowncoins_casino',
      ...properties
    });
  }
  
  // Google Analytics Universal
  if (typeof ga !== 'undefined') {
    ga('send', 'event', 'landing_page', eventName, 'clowncoins_casino');
  }
  
  // Custom analytics tracking
  if (CONFIG.analytics.trackingId) {
    // Add your custom analytics implementation here
    console.log('Analytics Event:', eventName, properties);
  }
  
  // Console logging for development
  console.log(`📊 Event: ${eventName}`, properties);
}

/**
 * Set loading state for buttons
 */
function setButtonLoadingState(isLoading) {
  const buttons = [
    elements.notifyBtn,
    elements.subscribeBtn,
    elements.finalCtaBtn
  ];
  
  buttons.forEach(button => {
    if (!button) return;
    
    if (isLoading) {
      button.classList.add('loading');
      button.disabled = true;
      
      // Add spinner
      const spinner = document.createElement('div');
      spinner.className = 'spinner';
      spinner.setAttribute('aria-hidden', 'true');
      button.appendChild(spinner);
    } else {
      button.classList.remove('loading');
      button.disabled = false;
      
      // Remove spinner
      const spinner = button.querySelector('.spinner');
      if (spinner) {
        spinner.remove();
      }
    }
  });
}

/**
 * Show success message
 */
function showSuccessMessage() {
  // Create success notification
  const notification = document.createElement('div');
  notification.className = 'alert alert--success';
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    z-index: 1001;
    max-width: 400px;
    animation: fadeInUp 0.3s ease-out;
  `;
  notification.innerHTML = `
    <strong>Success!</strong> You've been added to our early access list. We'll notify you when ClownCoins Casino launches!
  `;
  
  document.body.appendChild(notification);
  
  // Remove notification after 5 seconds
  setTimeout(() => {
    notification.style.animation = 'fadeIn 0.3s ease-out reverse';
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 5000);
}

/**
 * Setup intersection observer for scroll animations
 */
function setupIntersectionObserver() {
  if (!('IntersectionObserver' in window)) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  // Observe animated elements
  const animatedElements = document.querySelectorAll('.step, .benefit');
  animatedElements.forEach(el => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
  });
}

/**
 * Utility function to debounce function calls
 */
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Utility function to throttle function calls
 */
function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

/**
 * Handle page visibility changes
 */
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    // Page is hidden, pause any animations or videos
    console.log('Page hidden');
  } else {
    // Page is visible, resume animations
    console.log('Page visible');
  }
});

/**
 * Error handling
 */
window.addEventListener('error', (event) => {
  console.error('JavaScript Error:', event.error);
  trackEvent('javascript_error', {
    message: event.message,
    filename: event.filename,
    lineno: event.lineno,
    colno: event.colno
  });
});

/**
 * Performance monitoring
 */
if ('performance' in window) {
  window.addEventListener('load', () => {
    setTimeout(() => {
      const perfData = performance.getEntriesByType('navigation')[0];
      trackEvent('page_performance', {
        loadTime: perfData.loadEventEnd - perfData.loadEventStart,
        domContentLoaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
        firstPaint: performance.getEntriesByType('paint')[0]?.startTime || 0
      });
    }, 0);
  });
}

// Initialize the application
init();

// Export for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    init,
    openModal,
    closeModal,
    trackEvent,
    CONFIG
  };
}
