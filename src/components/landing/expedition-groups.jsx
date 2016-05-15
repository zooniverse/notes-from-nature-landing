import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { expeditionGroups } from 'constants/expedition-groups';

const LandingExpeditionGroups = ({ /* workflows */ }) => {
  // const activeGroups = expeditionGroups.filter(e => workflows.some(w =>
  //  w.display_name.startsWith(e.prefix)));
  const activeGroups = expeditionGroups;
  return (
    <div className="genera">
      <h3>Choose a Group and Start Transcribing!</h3>
      <div className="links">
        {activeGroups.map((expedition, i) =>
          <Link to={ `/active-expeditions/${expedition.prefix}` } key={i}>
            { React.createElement(expedition.icon) }
          </Link>
        )}
      </div>
    </div>
  );
};

LandingExpeditionGroups.propTypes = {
  project: PropTypes.object,
  workflows: PropTypes.array,
};

function mapStateToProps(state) {
  return {
    project: state.landing.project,
    workflows: state.landing.workflows,
    inactiveWorkflows: state.landing.inactiveWorkflows,
  };
}

export default connect(mapStateToProps)(LandingExpeditionGroups);
