import React, { PropTypes } from 'react';
import { expeditionCount } from 'constants/expeditions';

// TODO: Format numbers with commas

export const LandingStatistics = ({ project }) =>
  <div className="counters">
    <div>
      <div className="numbers">{expeditionCount}</div>
      <div className="subtitle">Expeditions available</div>
    </div>
    <div>
      <div className="numbers">{project.subjects_count}</div>
      <div className="subtitle">Total transcriptions</div>
    </div>
    <div>
      <div className="numbers">{project.classifiers_count}</div>
      <div className="subtitle">Users contributing</div>
    </div>
  </div>;

LandingStatistics.propTypes = {
  project: PropTypes.object,
};
