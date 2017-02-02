import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Hero } from 'components/hero';
import { connect } from 'react-redux';
import { FatFooter } from 'components/fat-footer';
import { expeditionsInGroup } from 'helpers/expeditions';
import { getExpeditionGroup } from 'helpers/expedition-groups';
import ActiveExpeditionTile from 'components/active-expedition-tile';

const ActiveExpeditionGroup = ({ params, activeWorkflows }) => {
  const { group } = params;
  const expeditionGroup = getExpeditionGroup(group);
  const expeditions = expeditionsInGroup(group, activeWorkflows);
  return (
    <div className="expedition-group active-expedition-group">
      <Hero title={expeditionGroup.name} subtitle={`Expeditions for ${expeditionGroup.name}`} />
      <div className="content">
        { React.createElement(expeditionGroup.icon) }
        <div className="tiles">
          { expeditions.length
          ? expeditions.map((workflow, i) =>
            <ActiveExpeditionTile workflow={workflow} key={i} />
          )
          : <div className="group-empty">
              <h2>There are currently no active expeditions for {expeditionGroup.name}.</h2>
              <Link to="/">Try another group.</Link>
            </div>
          }
          </div>
        </div>
      <FatFooter />
    </div>
  );
};

ActiveExpeditionGroup.propTypes = {
  params: PropTypes.object,
  activeWorkflows: PropTypes.array,
};

function mapStateToProps(state) {
  return {
    activeWorkflows: state.workflows.activeWorkflows,
  };
}

export default connect(mapStateToProps)(ActiveExpeditionGroup);
