import React from 'react';
import { Star, Subtitles, Film, Square, Flame, Upload, HardDrive, Info } from 'lucide-react';
import '../CSS/ClipPage.css';

const ClipPage = () => {
  return (
    <div className="clip-container">
      <div className="clip-content">
        {/* Header */}
        <div className="clip-header">
          <div className="clip-anything-container">
            <span className="clip-star">✨</span>
            <span className="clip-anything">Get clips from long videos</span>
          </div>
        </div>

        {/* Upload Section */}
        <div className="upload-section">
          <div className="youtube-link-area">
            <div className="youtube-link-content">
              <span className="link-icon">🔗</span>
              <span>Drop a YouTube link</span>
            </div>
          </div>

          <div className="upload-options">
            <button className="upload-button">
              <Upload size={18} className="button-icon" />
              <span>Upload</span>
            </button>
            <button className="drive-button">
              <HardDrive size={18} className="button-icon" />
              <span>Google Drive</span>
            </button>
          </div>

          <button className="get-clips-button">
            Get clips in 1 click
          </button>
          <div className="sample-link-container">
            <a href="#" className="sample-link">Click here to try a sample project</a>
          </div>
        </div>


      </div>
    </div>
  );
};

const FeatureItem = ({ icon, text }) => {
  return (
    <div className="feature-item">
      <div className="feature-icon-container">
        {icon}
      </div>
      <span className="feature-text">{text}</span>
    </div>
  );
};

export default ClipPage;