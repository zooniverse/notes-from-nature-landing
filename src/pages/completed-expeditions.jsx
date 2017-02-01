import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Hero } from 'components/hero';
import { FatFooter } from 'components/fat-footer';
import { ExpeditionGroups } from 'components/expedition-groups';
import CompletedExpeditionTile from 'components/completed-expedition-tile';
import { findExpedition } from 'helpers/expeditions';
import dateformat from 'dateformat';

const CompletedExpeditions = ({ inactiveWorkflows }) => {
  const expeditions = inactiveWorkflows.map(workflow => {
    const expedition = findExpedition(workflow.display_name);
    expedition.completed = expedition.completed_at ||
      dateformat(workflow.finished_at, 'mmmm d yyyy');
    return expedition;
  }).sort((a, b) => new Date(b.completed) - new Date(a.completed));
  return (
    <div className="completed-expeditions">
      <Hero title="Completed Expeditions" subtitle="" />
      <ExpeditionGroups
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
    inactiveWorkflows: state.workflows.activeWorkflows,
    // inactiveWorkflows: state.workflows.inactiveWorkflows,
  };
}

export default connect(mapStateToProps)(CompletedExpeditions);
