import React from 'react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const phoneNumber = '919284077578';
  const message = 'Hello! I am interested in your building materials and transport services. Please provide more information.';
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="whatsapp-button"
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 32 32" className="whatsapp-icon">
        <path
          fill="#fff"
          d="M16.002 3.003c-7.18 0-13 5.82-13 13 0 2.29.6 4.52 1.74 6.49l-1.83 6.68 6.85-1.8c1.89 1.03 4.02 1.57 6.24 1.57 7.18 0 13-5.82 13-13s-5.82-13-13-13zm0 23.83c-2.01 0-3.98-.54-5.69-1.56l-.41-.24-4.24 1.11 1.13-4.13-.27-.43c-1.12-1.78-1.71-3.84-1.71-5.95 0-5.97 4.86-10.83 10.83-10.83s10.83 4.86 10.83 10.83-4.86 10.83-10.83 10.83zm5.94-8.11c-.33-.16-1.93-.95-2.23-1.06-.3-.11-.52-.16-.74.16-.22.33-.85 1.06-1.04 1.28-.19.22-.38.25-.71.08-.33-.16-1.38-.51-2.63-1.62-.97-.87-1.63-1.94-1.82-2.27-.19-.33-.02-.51.14-.67.15-.15.33-.38.49-.57.16-.19.22-.33.33-.55.11-.22.05-.41-.03-.57-.08-.16-.74-1.78-1.01-2.43-.27-.64-.54-.55-.74-.56-.19-.01-.41-.01-.63-.01-.22 0-.57.08-.87.41-.3.33-1.14 1.11-1.14 2.72 0 1.6 1.17 3.15 1.33 3.37.16.22 2.3 3.51 5.57 4.92.78.34 1.39.54 1.86.69.78.25 1.49.21 2.05.13.63-.09 1.93-.79 2.2-1.55.27-.76.27-1.41.19-1.55-.08-.14-.3-.22-.63-.38z"
        />
      </svg>
      <span className="whatsapp-text">Chat with us</span>
    </a>
  );
};

export default WhatsAppButton;
