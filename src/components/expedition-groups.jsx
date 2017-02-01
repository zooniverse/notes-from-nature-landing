import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { getExpeditionGroups } from 'helpers/expedition-groups';

export const ExpeditionGroups = ({ workflows, text, link }) =>
  <div className="expedition-groups-container">
    <h3 className="call-to-action">{ text }</h3>
    <div className="expedition-groups">
      {getExpeditionGroups(workflows).map((group, i) =>
        <Link to={ `/${link}/${group.prefix}` } key={i}>
          { React.createElement(group.icon) }
        </Link>
      )}
    </div>
  </div>;

ExpeditionGroups.propTypes = {
  link: PropTypes.string,
  text: PropTypes.string,
  workflows: PropTypes.array,
};
