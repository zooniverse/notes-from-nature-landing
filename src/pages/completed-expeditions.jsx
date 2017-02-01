import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Hero } from 'components/hero';
import { FatFooter } from 'components/fat-footer';
import { ExpeditionGroups } from 'components/expedition-groups';
import CompletedExpeditionTiles from 'components/completed-expeditions/tiles';

const CompletedExpeditions = ({ inactiveWorkflows }) =>
  <div className="completed-expeditions">
    <Hero title="Completed Expeditions" subtitle="" />
    <ExpeditionGroups
      workflows={inactiveWorkflows}
      link="completed-expedition-group"
      text="Show Completed Expeditions for a Group"
    />
    <CompletedExpeditionTiles inactiveWorkflows={inactiveWorkflows} />
    <FatFooter />
  </div>;

CompletedExpeditions.propTypes = {
  params: PropTypes.object,
  inactiveWorkflows: PropTypes.array,
};

function mapStateToProps(state) {
  return {
    // inactiveWorkflows: state.workflows.activeWorkflows,
    inactiveWorkflows: state.workflows.inactiveWorkflows,
  };
}

export default connect(mapStateToProps)(CompletedExpeditions);
