import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { config } from 'constants/config';
import { findExpedition } from 'helpers/expeditions';

const ActiveExpeditionTile = ({ workflow }) => {
  const expedition = findExpedition(workflow);
  const total = workflow.subjects_count * workflow.retirement.options.count;
  const percent = Math.min((workflow.classifications_count / total) * 100.0, 100.0);
  return (
    <div className="tile">
      <a href={`${config.workflowUrl}workflow=${workflow.id}`}
        aria-label={`Link to ${expedition.name}`}
      >
        <img src={ require(`images/expeditions/${expedition.image}`) }
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
        <a href={`${expedition.link}`} className="more-info"
          aria-label="More information" target="_blank"
        >
          <i className="fa fa-info-circle" aria-hidden="true"></i>
        </a>
        : ''
      }
    </div>
  );
};

ActiveExpeditionTile.propTypes = {
  workflow: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    activeWorkflows: state.workflows.activeWorkflows,
  };
}

export default connect(mapStateToProps)(ActiveExpeditionTile);
