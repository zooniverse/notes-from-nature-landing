import React, { PropTypes } from 'react';
import { pluralize } from 'helpers/text';

const CompletedExpeditionTile = ({ expedition }) => {
  const beg = new Date(expedition.created_at);
  const end = new Date(expedition.completed);
  const days = Math.round((end - beg) / (1000 * 60 * 60 * 24)) + 1;
  return (
    <div className="tile">
      <div className="inner">
        <img src={ require(`images/expeditions/${expedition.image}`) }
          alt={expedition.name}
        >
        </img>
        <div className="snippet">{expedition.snippet}</div>
        <div className="label">
          <div>{expedition.name}</div>
          <div className="smaller">Completed: {expedition.completed}</div>
          {days >= 1 ?
            <div className="smaller">
              {expedition.subjects_count} subjects
              in {days} {pluralize('days', days)}
            </div>
            : ''
          }
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
  );
};

CompletedExpeditionTile.propTypes = {
  expedition: PropTypes.object,
};

export default CompletedExpeditionTile;
