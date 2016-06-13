import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { recentExpeditions } from 'helpers/expeditions';
import { config } from 'constants/config';

const FieldBookExpeditions = ({ classifications, workflows }) => {
  const expeditions = recentExpeditions(workflows, classifications);
  return (
    <div>
      <h2>Recent Expeditions</h2>
      <div className="expeditions">
        { expeditions.map((e, i) =>
          <div className="expedition" key={i}>
            <a href={`${config.workflowUrl}workflow=${e.id}`} aria-label={`Link to ${e.name}`}>
              <img src={ require(`images/expeditions/${e.image}`) } alt={e.name}></img>
              <div className="label"><div>{e.name}</div></div>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

FieldBookExpeditions.propTypes = {
  workflows: PropTypes.array,
  classifications: PropTypes.array,
};

function mapStateToProps(state) {
  return {
    classifications: state.classifications.classifications,
    workflows: state.workflows.workflows,
  };
}

export default connect(mapStateToProps)(FieldBookExpeditions);
