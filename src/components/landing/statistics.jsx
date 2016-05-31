import React, { PropTypes } from 'react';

export const LandingStatistics = ({ project, workflows }) =>
  <div className="statistics">
    <div>
      <div className="numbers">{workflows.length}</div>
      <div className="subtitle">Expeditions Available</div>
    </div>
    <div>
      <div className="numbers">{project.classifiers_count.toLocaleString()}</div>
      <div className="subtitle">Registered Volunteers</div>
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
      <div className="subtitle">Retired Subjects</div>
    </div>
  </div>;

LandingStatistics.propTypes = {
  project: PropTypes.object,
  workflows: PropTypes.array,
};
