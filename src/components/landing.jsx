import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as action from 'actions/landing';
import { Header } from 'header/header';
import { LandingReasons } from 'landing/reasons';
import { LandingStatistics } from 'landing/statistics';
import LandingExpeditionGroup from 'landing/expedition-groups';
import { FatFooter } from 'footer/fat-footer';

class Landing extends Component {
  componentDidMount() {
    this.props.dispatch(action.fetchProjectData());
  }
  render() {
    const { project } = this.props;
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
          <LandingExpeditionGroup />
          <LandingStatistics project={project} />
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
};

function mapStateToProps(state) {
  return {
    project: state.landing.project,
  };
}

export default connect(mapStateToProps)(Landing);
