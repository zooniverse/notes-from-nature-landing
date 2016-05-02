import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { expeditionGroupMap } from 'constants/expedition-groups';
import { expeditionInfo } from 'constants/expeditions';
import Header from 'header';
import { FatFooter } from 'fat-footer';
import { Title } from 'title';

class CompletedExpeditions extends Component {
  render() {
    const { params, inactiveWorkflows } = this.props;
    const { group } = params;
    const expedition = expeditionGroupMap[group];
    return (
      <div>
        <Header />
        <div className="completed-expeditions">
          <div className="completed-expeditions-title">
            <Title title={`Completed Expeditions for ${expedition.name}`} />
            <Link to={ `/active-expeditions/${expedition.prefix}` }>
              { React.createElement(expedition.icon) }
            </Link>
          </div>
          <hr />
          <div className="tiles">
            {inactiveWorkflows.filter(e => e.display_name.startsWith(group)).map((workflow, i) => {
              const name = workflow.display_name.replace(`${group}_`, '');
              const imgName = workflow.display_name.replace(/ /g, '_');
              const snippet = expeditionInfo(workflow.display_name).snippet;
              return (
                <div className="tile" key={i}>
                  <div className="completed-expedition">
                    <img src={ `expeditions/${imgName}.jpg` } alt={name}></img>
                    <div className="snippet">{snippet}</div>
                    <span>{name}</span>
                  </div>
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

CompletedExpeditions.propTypes = {
  params: PropTypes.object,
  project: PropTypes.object,
  workflows: PropTypes.array,
  inactiveWorkflows: PropTypes.array,
};

function mapStateToProps(state) {
  return {
    project: state.landing.project,
    workflows: state.landing.workflows,
    inactiveWorkflows: state.landing.inactiveWorkflows,
  };
}

export default connect(mapStateToProps)(CompletedExpeditions);
