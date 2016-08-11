import React, { PropTypes } from 'react';

export const LandingStatistics = ({ project, activeWorkflows }) =>
  <div className="statistics">
    <div>
      <div className="numbers">{activeWorkflows.length}</div>
      <div className="subtitle">Expeditions</div>
    </div>
    <div>
      <div className="numbers">{project.classifiers_count.toLocaleString()}</div>
      <div className="subtitle">Volunteers</div>
    </div>
    <div>
      <div className="numbers">{project.classifications_count.toLocaleString()}</div>
      <div className="subtitle">Classifications</div>
    </div>
    <div>
      <div className="numbers">{project.subjects_count.toLocaleString()}</div>
      <div className="subtitle">Subjects</div>
    </div>
    <div>
      <div className="numbers">{project.retired_subjects_count.toLocaleString()}</div>
      <div className="subtitle">Completed</div>
    </div>
  </div>;

LandingStatistics.propTypes = {
  project: PropTypes.object,
  activeWorkflows: PropTypes.array,
};
