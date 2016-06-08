import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { expeditionGroups } from 'constants/expedition-groups';
import Header from 'components/header';
import { FatFooter } from 'components/fat-footer';
import { Title } from 'components/title';
import { HomeIcon } from 'components/icons/home';
import { config } from 'constants/config';
import { findExpedition, expeditionsInGroup } from 'helpers/expeditions';

const ActiveExpeditions = ({ params, workflows }) => {
  const { group } = params;
  const expeditionGroup = expeditionGroups[group];
  return (
    <div>
      <Header />
      <div className="active-expeditions">
        <div className="active-expeditions-title">
          <Title title={`Active Expeditions for ${expeditionGroup.name}`} />
          <Link to={"/"} aria-label="Return Home">
            { React.createElement(expeditionGroup.icon) }
            <HomeIcon />
          </Link>
        </div>
        <hr />
        <div className="tiles">
          {expeditionsInGroup(group, workflows).map((workflow, i) => {
            const expedition = findExpedition(workflow.display_name);
            const percent = workflow.completeness * 100.0;
            return (
              <div className="tile" key={i}>
                <a href={`${config.workflowUrl}workflow=${workflow.id}`}
                  aria-label={`Link to ${expedition.name}`}
                >
                  <img src={ require(`../images/expeditions/${expedition.image}`) }
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
  workflows: PropTypes.array,
};

function mapStateToProps(state) {
  return {
    workflows: state.workflows.workflows,
  };
}

export default connect(mapStateToProps)(ActiveExpeditions);
