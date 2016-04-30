import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { expeditionMap } from 'constants/expeditions';
import { config } from 'constants/config';
import Header from 'header';
import { FatFooter } from 'footer/fat-footer';
import { ProjectName } from 'project-name';

export default class LandingExpeditionGroup extends Component {
  render() {
    const { params, workflows } = this.props;
    const { group } = params;
    const expedition = expeditionMap[group];
    return (
      <div>
        <Header />
        <div className="expedition-group">
          <div className="title">
            <ProjectName />
            <a href="/">{ React.createElement(expedition.icon) }</a>
          </div>
          <hr />
          <div className="tiles">
            {workflows.filter((e) => e.display_name.startsWith(group)).map((workflow, i) =>
              <div className="tile" key={i}>
                <a href={`${config.workflowUrl}workflow=${workflow.id}`}>
                  <img src={ `expeditions/${workflow.display_name.replace(/ /g, '_')}.jpg` }></img>
                  <span>{ workflow.display_name.replace(`${group}_`, '') }</span>
                </a>
              </div>
            )}
          </div>
        </div>
        <FatFooter />
      </div>
    );
  }
}

LandingExpeditionGroup.propTypes = {
  params: PropTypes.object,
  project: PropTypes.object,
  workflows: PropTypes.array,
};

function mapStateToProps(state) {
  return {
    project: state.landing.project,
    workflows: state.landing.workflows,
    inactiveWorkflows: state.landing.inactiveWorkflows,
  };
}

export default connect(mapStateToProps)(LandingExpeditionGroup);
