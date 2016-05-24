import React, { PropTypes } from 'react';

export const LandingStatistics = ({ project, workflows }) =>
  <div className="counters">
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
  </div>;

LandingStatistics.propTypes = {
  project: PropTypes.object,
  workflows: PropTypes.array,
};
