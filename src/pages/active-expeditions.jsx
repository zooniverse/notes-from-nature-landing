import React, { PropTypes } from 'react';
import { Hero } from 'components/hero';
import { connect } from 'react-redux';
import { expeditionGroups } from 'constants/expedition-groups';
import { FatFooter } from 'components/fat-footer';
import { config } from 'constants/config';
import { findExpedition, expeditionsInGroup } from 'helpers/expeditions';

const ActiveExpeditions = ({ params, activeWorkflows }) => {
  const { group } = params;
  const expeditionGroup = expeditionGroups[group];
  return (
    <div className="active-expeditions">
      <Hero
        title={expeditionGroup.name}
        subtitle={`Active Expeditions for ${expeditionGroup.name}`}
      />
      <div className="content">
        { React.createElement(expeditionGroup.icon) }
        <div className="tiles">
          { expeditionsInGroup(group, activeWorkflows).map((workflow, i) => {
            const expedition = findExpedition(workflow.display_name);
            const percent = workflow.completeness * 100.0;
            return (
              <div className="tile" key={i}>
                <a href={`${config.workflowUrl}workflow=${workflow.id}`}
                  aria-label={`Link to ${expedition.name}`}
                >
                  <img src={ require(`images/expeditions/${expedition.image}`) }
                    alt={expedition.name}
                  >
                  </img>
                  <div className="snippet">{expedition.snippet}</div>
                  <div className="label">
                    <div>{expedition.name}</div>
                    <div className="completeness">
                      {percent.toFixed(2)}% complete
                    </div>
                  </div>
                </a>
                {expedition.link ?
                  <a href={`${expedition.link}`} className="more-info" zIndex="10"
                    aria-label="More information" target="_blank"
                  >
                    <i className="fa fa-info-circle" aria-hidden="true"></i>
                  </a>
                  : ''
                }
              </div>
            );
          })}
          </div>
        </div>
      <FatFooter />
    </div>
  );
};

ActiveExpeditions.propTypes = {
  params: PropTypes.object,
  activeWorkflows: PropTypes.array,
};

function mapStateToProps(state) {
  return {
    activeWorkflows: state.workflows.activeWorkflows,
  };
}

export default connect(mapStateToProps)(ActiveExpeditions);
