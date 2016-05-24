import React, { PropTypes } from 'react';

export const LandingStatistics = ({ project, workflows }) =>
  <div className="project-metadata">
    <div className="project-metadata-header">
      <span>Notes from Nature</span>{' '}
      <a href="https://www.zooniverse.org/projects/zooniverse/notes-from-nature-relaunch/stats"><span>Statistics</span></a>
    </div>
    <div className="project-metadata-stats">
      <div>
        <div className="numbers">{workflows.length}</div>
        <div className="subtitle">Expeditions available</div>
      </div>
      <div>
        <div className="numbers">{project.subjects_count.toLocaleString()}</div>
        <div className="subtitle">Total transcriptions</div>
      </div>
      <div>
        <div className="numbers">{project.classifiers_count.toLocaleString()}</div>
        <div className="subtitle">Users contributing</div>
      </div>
    </div>
  </div>;

LandingStatistics.propTypes = {
  project: PropTypes.object,
  workflows: PropTypes.array,
};
