import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from 'components/header';
import { Title } from 'components/title';
import { LandingReasons } from 'components/landing/reasons';
import { LandingStatistics } from 'components/landing/statistics';
import LandingExpeditionGroups from 'components/landing/expedition-groups';
import { FatFooter } from 'components/fat-footer';
import { Contributors } from 'components/contributors';

const Landing = ({ project, workflows }) =>
  <div className="landing">
    <div className="hero">
      <Header active={'landing'} />
      <div className="informational project-announcement-banner">
        <p>Beta Complete, thanks for all the feedback! We're working on site changes now. Come back for full launch mid-June.</p>
      </div>
      <div className="landing-title">
        <div className="action"><span>TRANSCRIBE MUSEUM RECORDS</span></div>
        <div><hr /></div>
        <Title title="" />
      </div>
      <LandingExpeditionGroups workflows={workflows} />
      <LandingStatistics project={project} workflows={workflows} />
    </div>
    <LandingReasons />
    <Contributors />
    <FatFooter />
  </div>;

Landing.propTypes = {
  project: PropTypes.object,
  workflows: PropTypes.array,
};

function mapStateToProps(state) {
  return {
    project: state.project.project,
    workflows: state.workflow.workflows,
    inactiveWorkflows: state.workflow.inactiveWorkflows,
  };
}

export default connect(mapStateToProps)(Landing);
