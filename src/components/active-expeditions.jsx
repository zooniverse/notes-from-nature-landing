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
  console.log(activeWorkflows);
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
            const snippet = expeditionInfo(workflow.display_name).snippet;
            return (
              <div className="tile" key={i}>
                <a href={`${config.workflowUrl}workflow=${workflow.id}`}
                  aria-label={`Link to ${name}`}
                >
                  <img src={ `expeditions/${imgName}.jpg` } alt={name}></img>
                  <div className="snippet">{snippet}</div>
                  <span>{name}</span>
                  <span className="completeness">{workflow.completeness}% complete</span>
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
  project: PropTypes.object,
  workflows: PropTypes.array,
};

function mapStateToProps(state) {
  return {
    project: state.landing.project,
    workflows: state.landing.workflows,
  };
}

export default connect(mapStateToProps)(ActiveExpeditions);
