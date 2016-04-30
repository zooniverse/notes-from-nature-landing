import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { expeditions } from 'constants/expeditions';

class LandingExpeditionGroups extends Component {
  render() {
    const { workflows } = this.props;
    return (
      <div className="genera">
        <h3>Choose a Group and Start Transcribing!</h3>
        <div className="links">
          {expeditions.filter((e) => workflows.some((w) => w.display_name.startsWith(e.group))).map((expedition, i) =>
            <Link to={`/expedition-group/${expedition.group}`} key={i}>
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
