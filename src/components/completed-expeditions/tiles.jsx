import React, { PropTypes } from 'react';
import { findExpedition } from 'helpers/expeditions';
import dateformat from 'dateformat';

const CompletedExpeditionTiles = ({ inactiveWorkflows }) => {
  const expeditions = inactiveWorkflows.map(workflow => {
    const expedition = findExpedition(workflow.display_name);
    expedition.completed = expedition.completed_at ||
      dateformat(workflow.finished_at, 'mmmm d yyyy');
    return expedition;
  }).sort((a, b) => new Date(b.completed) - new Date(a.completed));

  return (
    <div className="tiles">
      {expeditions.map((expedition, i) =>
        <div className="tile" key={i}>
          <div className="completed-expedition">
            <img src={ require(`images/expeditions/${expedition.image}`) }
              alt={expedition.name}
            >
            </img>
            <div className="snippet">{expedition.snippet}</div>
            <div className="label">
              <div>{expedition.name}</div>
              <div className="completed">Completed: {expedition.completed}</div>
            </div>
          </div>
          {expedition.link ?
            <a href={`${expedition.link}`} className="more-info"
              aria-label="More information" target="_blank"
            >
              <i className="fa fa-info-circle" aria-hidden="true"></i>
            </a>
            : ''
          }
        </div>
      )}
    </div>
  );
};

CompletedExpeditionTiles.propTypes = {
  inactiveWorkflows: PropTypes.array,
};

export default CompletedExpeditionTiles;
