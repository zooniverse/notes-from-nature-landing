import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { activeExpeditionGroups } from 'helpers/expedition-groups';

const LandingExpeditionGroups = ({ workflows }) =>
  <div className="expedition-groups">
    <h3>Choose a Group and Start Transcribing!</h3>
    <div className="links">
      {activeExpeditionGroups(workflows).map((group, i) =>
        <Link to={ `/active-expeditions/${group.prefix}` } key={i}>
          { React.createElement(group.icon) }
        </Link>
      )}
    </div>
  </div>;

LandingExpeditionGroups.propTypes = {
  workflows: PropTypes.array,
};

function mapStateToProps(state) {
  return {
    workflows: state.workflows.workflows,
  };
}

export default connect(mapStateToProps)(LandingExpeditionGroups);
