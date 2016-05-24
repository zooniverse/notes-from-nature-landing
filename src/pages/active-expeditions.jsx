import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { expeditionGroupMap } from 'constants/expedition-groups';
import Header from 'components/header';
import { FatFooter } from 'components/fat-footer';
import { Title } from 'components/title';
import { HomeIcon } from 'components/icons/home';
import { expeditionInfo } from 'constants/expeditions';
import { config } from 'constants/config';

const ActiveExpeditions = ({ params, workflows }) => {
  const { group } = params;
  const expedition = expeditionGroupMap[group];
  const activeWorkflows = workflows.filter(e => e.display_name.startsWith(group));
  return (
    <div>
      <Header />
      <div className="active-expeditions">
        <div className="active-expeditions-title">
          <Title title={`Active Expeditions for ${expedition.name}`} />
          <Link to={"/"} aria-label="Return Home">
            { React.createElement(expedition.icon) }
            <HomeIcon />
          </Link>
        </div>
        <hr />
        <div className="tiles">
          {activeWorkflows.map((workflow, i) => {
            const expInfo = expeditionInfo(workflow.display_name);
            const name = workflow.display_name.replace(`${group}_`, '');
            return (
              <div className="tile" key={i}>
                <a href={`${config.workflowUrl}workflow=${workflow.id}`}
                  aria-label={`Link to ${name}`}
                >
                  <img src={ require(`../images/expeditions/${expInfo.image}`) } alt={name}></img>
                  <div className="snippet">{expInfo.snippet}</div>
                  <div className="label">
                    <div>{name}</div>
                    <div className="completeness">{workflow.completeness}% complete</div>
                  </div>
                </a>
                {expInfo.info ?
                  <a href={`${expInfo.info}`} className="more-info" zIndex="10"
                    aria-label="More information"
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
    workflows: state.workflow.workflows,
  };
}

export default connect(mapStateToProps)(ActiveExpeditions);
