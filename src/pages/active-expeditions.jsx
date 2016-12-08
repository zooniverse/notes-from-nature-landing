import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Hero } from 'components/hero';
import { connect } from 'react-redux';
import { FatFooter } from 'components/fat-footer';
import { config } from 'constants/config';
import { findExpedition, expeditionsInGroup } from 'helpers/expeditions';
import { getExpeditionGroup } from 'helpers/expedition-groups';

const ActiveExpeditions = ({ params, activeWorkflows }) => {
  const { group } = params;
  const expeditionGroup = getExpeditionGroup(group);
  const expeditions = expeditionsInGroup(group, activeWorkflows);
  return (
    <div className="active-expeditions">
      <Hero
        title={expeditionGroup.name}
        subtitle={`Expeditions for ${expeditionGroup.name}`}
      />
      <div className="content">
        { React.createElement(expeditionGroup.icon) }
        <div className="tiles">
          { expeditions.length
            ? expeditions.map((workflow, i) => {
              const expedition = findExpedition(workflow.display_name);
              const total = workflow.subjects_count * workflow.retirement.options.count;
              const percent = (workflow.classifications_count / total) * 100.0;
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
                    <a href={`${expedition.link}`} className="more-info"
                      aria-label="More information" target="_blank"
                    >
                      <i className="fa fa-info-circle" aria-hidden="true"></i>
                    </a>
                    : ''
                  }
                </div>
              );
            })
          : <div className="active-expeditions-empty">
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
