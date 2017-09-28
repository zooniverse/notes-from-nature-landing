import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Hero } from 'components/hero';
import { FatFooter } from 'components/fat-footer';
import { ExpeditionGroupIcons } from 'components/expedition-group-icons';
import CompletedExpeditionTile from 'components/completed-expedition-tile';
import { filterIfExpeditionConstant, findExpedition, expeditionCompleted } from 'helpers/expeditions'; // eslint-disable-line max-len

const CompletedExpeditions = ({ inactiveWorkflows }) => {
  const filteredWorkflows = filterIfExpeditionConstant(inactiveWorkflows);
  const expeditions = filteredWorkflows.map(workflow => {
    const expedition = findExpedition(workflow);
    expedition.completed = expeditionCompleted(expedition);
    return expedition;
  }).sort((a, b) => new Date(b.completed) - new Date(a.completed));
  return (
    <div className="completed-expeditions">
      <Hero title="Completed Expeditions" subtitle="" />
      <ExpeditionGroupIcons
        workflows={inactiveWorkflows}
        link="completed-expedition-group"
        text="Show Completed Expeditions for a Group"
      />
      <div className="content">
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

CompletedExpeditions.propTypes = {
  inactiveWorkflows: PropTypes.array,
};

function mapStateToProps(state) {
  return {
    // inactiveWorkflows: state.workflows.activeWorkflows,
    inactiveWorkflows: state.workflows.inactiveWorkflows,
  };
}

export default connect(mapStateToProps)(CompletedExpeditions);
