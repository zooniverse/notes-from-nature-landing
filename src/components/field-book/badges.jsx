import React, { PropTypes } from 'react';
import { earnedBadges } from 'helpers/badge-groups';
import { pluralize } from 'helpers/text';

export const FieldBookBadges = ({ allWorkflows, activityByWorkflow }) => {
  const earned = earnedBadges(allWorkflows, activityByWorkflow);
  return (
    <div>
      <h2>You have earned these badges</h2>
        { Object.keys(earned).sort().map((g, i) =>
          <div className="badges" key={i}>
            { earned[g].map((b, j) =>
                <div className="badge" key={j}>
                  <img src={require(`images/badges/${b.badge}`)} alt={`${b.name}`}></img>
                  <div className="description">
                    {`The ${b.name} badge is earned for transcrbing ${b.count} ${b.group}
                      ${pluralize('records', b.count)}`}
                  </div>
                </div>
            )}
          </div>
        )}
    </div>
  );
};

FieldBookBadges.propTypes = {
  allWorkflows: PropTypes.array,
  activityByWorkflow: PropTypes.object,
};
