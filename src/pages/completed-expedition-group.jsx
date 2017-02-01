import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Hero } from 'components/hero';
import { FatFooter } from 'components/fat-footer';
import CompletedExpeditionTiles from 'components/completed-expeditions/tiles';
import { expeditionsInGroup } from 'helpers/expeditions';
import { getExpeditionGroup } from 'helpers/expedition-groups';

const CompletedExpeditionGroup = ({ params, inactiveWorkflows }) => {
  const { group } = params;
  const expeditionGroup = getExpeditionGroup(group);
  const expeditions = expeditionsInGroup(group, inactiveWorkflows);
  return (
    <div className="completed-expedition-group">
      <Hero
        title={expeditionGroup.name}
        subtitle={`Completed Expeditions for ${expeditionGroup.name}`}
      />
      <div className="content">
        { React.createElement(expeditionGroup.icon) }
        <CompletedExpeditionTiles inactiveWorkflows={expeditions} />
      </div>
      <FatFooter />
    </div>
  );
};

CompletedExpeditionGroup.propTypes = {
  params: PropTypes.object,
  inactiveWorkflows: PropTypes.array,
};

function mapStateToProps(state) {
  return {
    // inactiveWorkflows: state.workflows.activeWorkflows,
    inactiveWorkflows: state.workflows.inactiveWorkflows,
  };
}

export default connect(mapStateToProps)(CompletedExpeditionGroup);
