import React, { PropTypes } from 'react';

const CompletedExpeditionTile = ({ expedition }) =>
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
  </div>;

CompletedExpeditionTile.propTypes = {
  expedition: PropTypes.object,
};

export default CompletedExpeditionTile;
