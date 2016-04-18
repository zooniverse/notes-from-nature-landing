import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as action from 'actions/landing';
import { Header } from 'header/header';
import { LandingReasons } from 'landing/reasons';
import { LandingStatistics } from 'landing/statistics';
import LandingExpeditionGroups from 'landing/expedition-groups';
import { FatFooter } from 'footer/fat-footer';

class Landing extends Component {
  componentDidMount() {
    this.props.dispatch(action.fetchProjectData());
    this.props.dispatch(action.fetchWorkflows());
  }
  render() {
    const { project, workflows } = this.props;
    return (
      <div className="landing">
        <div className="hero">
          <Header active={ 'landing' } />
          <div className="landing-title">
            <div className="action"><span>TRANSCRIBE MUSEUM RECORDS</span></div>
            <div><hr /></div>
            <div className="tagline">
              <span>Notes&nbsp;</span>
              <span className="smaller">from</span>
              <span>&nbsp;Nature</span>
            </div>
          </div>
          <LandingExpeditionGroups />
          <LandingStatistics project={project} workflows={workflows} />
        </div>
        <LandingReasons />
        <FatFooter />
      </div>
    );
  }
}

Landing.propTypes = {
  dispatch: PropTypes.func,
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

export default connect(mapStateToProps)(Landing);
