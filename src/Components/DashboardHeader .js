import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/DashboardHeader.css';

const DashboardHeader = ({ 
  notificationCount = 8,
  credits = 44,
  isPlanFree = true,
  onUpgradeClick = () => {},
}) => {
  const navigate = useNavigate();
  
  // Function to navigate to pricing page when Add more credits is clicked
  const handleAddCreditsClick = () => {
    navigate('/pricing');
  };

  return (
    <div className="dashboard-header">
      <div className="dashboard-header-container">
        {/* Left side - empty or could contain logo */}
        <div></div>
        
        {/* Right side - notification, credits, upgrade */}
        <div className="dashboard-header-controls">
          {/* Notification bell with badge */}
          <div className="notification-bell">
            <svg xmlns="http://www.w3.org/2000/svg" className="bell-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v0.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            {notificationCount > 0 && (
              <span className="notification-badge">
                {notificationCount > 9 ? '9+' : notificationCount}
              </span>
            )}
          </div>
          
          {/* Credits counter */}
          <div className="credits-counter">
            <svg xmlns="http://www.w3.org/2000/svg" className="credits-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            {credits}
          </div>
          
          {/* Add more credits button */}
          <button 
            className="add-credits-button"
            onClick={handleAddCreditsClick}
          >
            Add more credits
          </button>
        </div>
      </div>
      
      {/* Upgrade banner */}
      {isPlanFree && (
        <div className="upgrade-banner">
          <div className="upgrade-banner-container">
            <p className="upgrade-message">
              You are using the Free Plan of OpusClip with watermark and limited features.
            </p>
            <button 
              className="upgrade-button"
              onClick={onUpgradeClick}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="upgrade-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Upgrade
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardHeader;