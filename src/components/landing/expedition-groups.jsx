import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { activeExpeditionGroups } from 'helpers/expedition-groups';

export const LandingExpeditionGroups = ({ activeWorkflows }) =>
  <div className="expedition-groups-container">
    <h3 className="call-to-action">Choose a Group and Start transcribing!</h3>
    <div className="expedition-groups">
      {activeExpeditionGroups(activeWorkflows).map((group, i) =>
        <Link to={ `/active-expeditions/${group.prefix}` } key={i}>
          { React.createElement(group.icon) }
        </Link>
      )}
    </div>
  </div>;

LandingExpeditionGroups.propTypes = {
  activeWorkflows: PropTypes.array,
};
