import React, { PropTypes } from 'react';
import { earnedBadges } from 'helpers/badge-groups';
import { pluralize } from 'helpers/text';

export const FieldBookBadges = ({ allWorkflows, activityByWorkflow }) =>
  <div>
    <h2>You have earned these badges</h2>
    <div className="badges">
      { earnedBadges(allWorkflows, activityByWorkflow).map((b, i) =>
        <div className="badge" key={i}>
          <img src={require(`images/badges/${b.badge}`)} alt={`${b.name}`}></img>
          <div className="description">
            {`The ${b.name} badge is earned for transcrbing ${b.count} ${b.group}
              ${pluralize('records', b.count)}`}
          </div>
        </div>
      )}
    </div>
  </div>;

FieldBookBadges.propTypes = {
  allWorkflows: PropTypes.array,
  activityByWorkflow: PropTypes.object,
};
