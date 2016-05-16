import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { expeditionGroupMap } from 'constants/expedition-groups';
import { expeditionInfo } from 'constants/expeditions';
import { config } from 'constants/config';
import Header from 'header';
import { FatFooter } from 'fat-footer';
import { Title } from 'title';
import { HomeIcon } from 'components/icons/home';

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
          <a href="/">
            { React.createElement(expedition.icon) }
            <HomeIcon />
          </a>
        </div>
        <hr />
        <div className="tiles">
          {activeWorkflows.map((workflow, i) => {
            const name = workflow.display_name.replace(`${group}_`, '');
            const imgName = workflow.display_name.replace(/ /g, '_');
            const expInfo = expeditionInfo(workflow.display_name);
            return (
              <div className="tile" key={i}>
                <a href={`${config.workflowUrl}workflow=${workflow.id}`}
                  aria-label={`Link to ${name}`}
                >
                  <img src={ `expeditions/${imgName}.jpg` } alt={name}></img>
                  <div className="snippet">{expInfo.snippet}</div>
                  <div className="label">
                    <div>{name}</div>
                    <div className="completeness">{workflow.completeness}% complete</div>
                  </div>
                </a>
                <a href={`${expInfo.info}`} className="more-info" zIndex="10">
                  <i className="fa fa-info-circle" aria-hidden="true"></i>
                </a>
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
    workflows: state.landing.workflows,
  };
}

export default connect(mapStateToProps)(ActiveExpeditions);
