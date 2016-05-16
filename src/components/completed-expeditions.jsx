import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { expeditionInfo } from 'constants/expeditions';
import Header from 'header';
import { FatFooter } from 'fat-footer';
import { Title } from 'title';
import dateformat from 'dateformat';

const CompletedExpeditions = ({ inactiveWorkflows }) =>
  <div>
    <Header />
    <div className="completed-expeditions">
      <div className="completed-expeditions-title">
        <Title title="Completed Expeditions" />
      </div>
      <hr />
      <div className="tiles">
        {inactiveWorkflows.map((workflow, i) => {
          const name = workflow.display_name.replace(/^[a-z0-9]+_/i, '');
          const imgName = workflow.display_name.replace(/ /g, '_');
          const snippet = expeditionInfo(workflow.display_name).snippet;
          const completed = dateformat(workflow.finished_at, 'mmmm d yyyy');
          return (
            <div className="tile" key={i}>
              <div className="completed-expedition">
                <img src={ `expeditions/${imgName}.jpg` } alt={name}></img>
                <div className="snippet">{snippet}</div>
                <div>
                  <div>{name}</div>
                  <div className="completed">Completed: {completed}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    <FatFooter />
  </div>;

CompletedExpeditions.propTypes = {
  params: PropTypes.object,
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
