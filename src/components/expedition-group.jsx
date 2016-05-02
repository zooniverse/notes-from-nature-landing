import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { expeditionGroupMap } from 'constants/expedition-groups';
import { expeditionInfo } from 'constants/expeditions';
import { config } from 'constants/config';
import Header from 'header';
import { FatFooter } from 'fat-footer';
import { ProjectName } from 'project-name';
import { LandingExpeditionGroupHomeIcon } from 'components/expedition-group/home';
import { LandingExpeditionGroupHistoryIcon } from 'components/expedition-group/history';

export default class ExpeditionGroup extends Component {
  render() {
    const { params, workflows } = this.props;
    const { group } = params;
    const expedition = expeditionGroupMap[group];
    return (
      <div>
        <Header />
        <div className="expedition-group">
          <div className="title">
            <a href="#" className="history-link">
              <LandingExpeditionGroupHistoryIcon />
            </a>
            <ProjectName />
            <a href="/">
              { React.createElement(expedition.icon) }
              <LandingExpeditionGroupHomeIcon />
            </a>
          </div>
          <hr />
          <div className="tiles">
            {workflows.filter(e => e.display_name.startsWith(group)).map((workflow, i) => {
              const name = workflow.display_name.replace(`${group}_`, '');
              const imgName = workflow.display_name.replace(/ /g, '_');
              const snippet = expeditionInfo(workflow.display_name).snippet;
              return (
                <div className="tile" key={i}>
                  <a href={`${config.workflowUrl}workflow=${workflow.id}`} aria-label={`Link to ${name}`}>
                    <img src={ `expeditions/${imgName}.jpg` } alt={name}></img>
                    <div className="snippet">{snippet}</div>
                    <span>{name}</span>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
        <FatFooter />
      </div>
    );
  }
}

ExpeditionGroup.propTypes = {
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

export default connect(mapStateToProps)(ExpeditionGroup);
