import React from 'react';
import '../CSS/BasicHeader.css';

const BasicHeader = ({ onLoginClick, onSignupClick, onLogoClick, onFeatureClick, onPricingClick, onBlogClick, currentPage }) => {
  return (
    <header className="basic-header">
      <div className="header-container">
        <div className="logo-container">
          <div className="logo" onClick={onLogoClick} role="button" tabIndex={0}>
            <div className="logo-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L4 6V12C4 15.31 7.58 19.5 12 21C16.42 19.5 20 15.31 20 12V6L12 2Z" 
                  fill="#FF5722" stroke="#FF5722" strokeWidth="1" />
                <path d="M13 11.8L16 8.8L14.59 7.4L13 9L11.41 7.4L10 8.8L13 11.8Z" 
                  fill="white" stroke="white" strokeWidth="0.2" />
              </svg>
            </div>
            <span className="logo-text">OpusClip</span>
          </div>
        </div>
        
        <nav className="header-nav">
          <ul className="nav-links">
            <li>
              <a 
                href="#" 
                onClick={onFeatureClick} 
                className={currentPage === 'features' ? 'active' : ''}
              >
                Features
              </a>
            </li>
            <li>
              <a 
                href="#" 
                onClick={onPricingClick} 
                className={currentPage === 'pricing' ? 'active' : ''}
              >
                Pricing
              </a>
            </li>
            <li>
              <a 
                href="#" 
                onClick={onBlogClick} 
                className={currentPage === 'blog' ? 'active' : ''}
              >
                Blog
              </a>
            </li>
          </ul>
        </nav>
        
        <div className="auth-buttons">
          <button className="login-button" onClick={onLoginClick}>
            Log in
          </button>
          <button className="signup-button" onClick={onSignupClick}>
            Sign up
          </button>
        </div>
      </div>
    </header>
  );
};

export default BasicHeader;