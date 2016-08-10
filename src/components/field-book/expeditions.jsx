import React, { PropTypes } from 'react';
import { recentExpeditions } from 'helpers/expeditions';
import { config } from 'constants/config';

export const FieldBookExpeditions = ({ allWorkflows, activityByWorkflow }) =>
  <div className="expedition-container">
    <h3>Top Recent Expeditions</h3>
    <hr />
    <div className="expeditions">
      { recentExpeditions(allWorkflows, activityByWorkflow).map((e, i) =>
        <div className="expedition" key={i}>
          {e.active
            ? <a href={`${config.workflowUrl}workflow=${e.id}`} aria-label={`Link to ${e.name}`}>
                <img src={ require(`images/expeditions/${e.image}`) } alt={e.name}></img>
              </a>
            : <div>
                <img src={ require(`images/expeditions/${e.image}`) } alt={e.name}></img>
              </div>
          }
        </div>
      )}
    </div>
  </div>;

FieldBookExpeditions.propTypes = {
  allWorkflows: PropTypes.array,
  activityByWorkflow: PropTypes.object,
};
