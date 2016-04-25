import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { expeditionMap } from 'constants/expeditions';
import { Header } from 'header/header';
import { FatFooter } from 'footer/fat-footer';

// TODO Fix links

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
            <a href="/"><h1>Notes From Nature</h1></a>
            <a href="/">{ React.createElement(expedition.icon) }</a>
          </div>
          <hr />
          <div className="tiles">
            {workflows.filter((e) => e.display_name.startsWith(group)).map((workflow, i) =>
              <div className="tile">
                <a href="/" key={i}>
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
