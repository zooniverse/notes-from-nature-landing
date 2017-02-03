import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Hero } from 'components/hero';
import { FatFooter } from 'components/fat-footer';
import { expeditionsInGroup } from 'helpers/expeditions';
import { getExpeditionGroup } from 'helpers/expedition-groups';
import CompletedExpeditionTile from 'components/completed-expedition-tile';
import { findExpedition, expeditionCompleted } from 'helpers/expeditions';

const CompletedExpeditionGroup = ({ params, inactiveWorkflows }) => {
  const { group } = params;
  const expeditionGroup = getExpeditionGroup(group);
  const expeditions = expeditionsInGroup(group, inactiveWorkflows).map(workflow => {
    const expedition = findExpedition(workflow);
    expedition.completed = expeditionCompleted(expedition);
    return expedition;
  }).sort((a, b) => new Date(b.completed) - new Date(a.completed));
  return (
    <div className="expedition-group completed-expedition-group">
      <Hero
        title={expeditionGroup.name}
        subtitle={`Completed Expeditions for ${expeditionGroup.name}`}
      />
      <div className="content">
        { React.createElement(expeditionGroup.icon) }
        <div className="tiles">
          {expeditions.map((expedition, i) =>
            <CompletedExpeditionTile expedition={expedition} key={i} />
          )}
        </div>
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
