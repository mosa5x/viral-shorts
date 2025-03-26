import React from 'react';
import '../CSS/ProjectPage.css';

const ProjectPage = () => {
  // Mock data for projects
  const projects = [
    { id: 1, name: 'clip_1.mp4', type: 'ClipBasic', status: 'expiring', daysLeft: 5, isNew: false },
    { id: 2, name: 'faq3.mp4', type: 'ClipBasic', status: 'uneditable', isNew: false },
    { id: 3, name: 'clip_chess1.mp4', type: 'ClipBasic', status: 'uneditable', isNew: false },
    { id: 4, name: 'clip_1.mp4', type: 'ClipBasic', status: 'uneditable', isNew: false },
    { id: 5, name: 'faq2.mp4', type: 'ClipBasic', status: 'uneditable', isNew: false },
    { id: 6, name: 'faq2.mp4', type: 'ClipBasic', status: 'uneditable', isNew: true },
    { id: 7, name: 'faq2.mp4', type: 'ClipBasic', status: 'uneditable', isNew: true },
    { id: 8, name: 'clip_1.mp4', type: 'ClipBasic', status: 'uneditable', isNew: false },
    { id: 9, name: 'output001.mp4', type: 'ClipBasic', status: 'uneditable', isNew: false },
    { id: 10, name: 'output001.mp4', type: 'ClipBasic', status: 'uneditable', isNew: true },
  ];

  return (
    <div className="project-page">
      {/* Header */}
      <div className="header">
        <div className="tab-container">
          <button className="tab active">All projects (12)</button>
          <button className="tab">Saved projects (0)</button>
        </div>
        <div className="header-right">
          <span className="storage-info">0 GB / 0 GB</span>
          <div className="toggle-container">
            <div className="toggle-button active">
              <span className="toggle-indicator"></span>
              <span>Auto-save</span>
            </div>
            <div className="toggle-button">
              <span className="toggle-indicator inactive"></span>
              <span>Auto-import</span>
              <span className="beta-tag">Beta</span>
            </div>
          </div>
        </div>
      </div>

      {/* Project Grid */}
      <div className="project-container">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="thumbnail-container">
              <img 
                src="/api/placeholder/250/150" 
                alt={project.name}
                className="thumbnail"
              />
              <div className="badges">
                <span className="free-plan-badge">Free Plan</span>
                {project.isNew && (
                  <span className="new-badge">New</span>
                )}
              </div>
              <div className="status-overlay">
                {project.status === 'expiring' ? (
                  <span>{project.daysLeft} days before expiring</span>
                ) : (
                  <span>Unable to edit</span>
                )}
              </div>
            </div>
            <div className="project-info">
              <div className="project-details">
                <h3 className="project-name">{project.name}</h3>
                <p className="project-type">{project.type}</p>
              </div>
              <button className="options-button">...</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;