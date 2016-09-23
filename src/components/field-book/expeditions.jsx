import React, { PropTypes } from 'react';
import { recentExpeditions } from 'helpers/expeditions';
import { config } from 'constants/config';
import { pluralize } from 'helpers/text';
import { OutboundLink } from 'react-ga';

export const FieldBookExpeditions = ({ allWorkflows, activityByWorkflow }) =>
  <div className="expedition-container">
    <h3>Top Recent Expeditions</h3>
    <hr />
    <div className="expeditions">
      { recentExpeditions(allWorkflows, activityByWorkflow).map((e, i) =>
        <div className="expedition" key={i}>
          {e.active
            ? <OutboundLink to={`${config.workflowUrl}workflow=${e.id}`}
              eventLabel={`${config.workflowUrl}workflow=${e.id}`}
              aria-label={`Link to ${e.name}`}
            >
                <img src={ require(`images/expeditions/${e.image}`) } alt={e.name}></img>
                <div className="roll-over">
                  <h4>{e.name}</h4>
                  <span>{`You transcribed ${e.count} ${pluralize('records', e.count)}.`}</span>
                  {e.active ? <span>&nbsp;Click to transcribe more.</span> : '' }
                </div>
              </OutboundLink>
            : <div>
                <img src={ require(`images/expeditions/${e.image}`) } alt={e.name}></img>
                <div className="roll-over">
                  <h4>{e.name}</h4>
                  <span>{`You transcribed ${e.count} ${pluralize('records', e.count)}.`}</span>
                </div>
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
