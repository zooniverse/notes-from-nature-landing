import React, { PropTypes } from 'react';
import { recentExpeditions } from 'helpers/expeditions';
import { config } from 'constants/config';

export const FieldBookExpeditions = ({ classifications, allWorkflows }) =>
  <div>
    <h2>Recent Expeditions</h2>
    <div className="expeditions">
      { recentExpeditions(allWorkflows, classifications).map((e, i) =>
        <div className="expedition" key={i}>
          {e.active
            ? <a href={`${config.workflowUrl}workflow=${e.id}`} aria-label={`Link to ${e.name}`}>
                <img src={ require(`images/expeditions/${e.image}`) } alt={e.name}></img>
                <div className="label">
                  <div>{e.name}</div>
                  </div>
              </a>
            : <div>
                <img src={ require(`images/expeditions/${e.image}`) } alt={e.name}></img>
                <div className="label">
                  <div>{e.name}</div>
                  </div>
              </div>
          }
        </div>
      )}
    </div>
  </div>;

FieldBookExpeditions.propTypes = {
  allWorkflows: PropTypes.array,
  classifications: PropTypes.array,
};
