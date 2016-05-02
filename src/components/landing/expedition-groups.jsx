import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { expeditionGroups } from 'constants/expedition-groups';

class LandingExpeditionGroups extends Component {
  render() {
    const { workflows } = this.props;
    return (
      <div className="genera">
        <h3>Choose a Group and Start Transcribing!</h3>
        <div className="links">
          {expeditionGroups.filter(e => workflows.some(w => w.display_name.startsWith(e.prefix))).map((expedition, i) =>
            <Link to={ `/expedition-group/${expedition.prefix}` } key={i}>
              { React.createElement(expedition.icon) }
            </Link>
          )}
        </div>
      </div>
    );
  }
}

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
