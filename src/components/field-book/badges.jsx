import React, { PropTypes } from 'react';
import { taxonBadges, multiBadges } from 'helpers/badge-groups';
import { pluralize } from 'helpers/text';

export const FieldBookBadges = ({ allWorkflows, activityByWorkflow }) => {
  const taxons = taxonBadges(allWorkflows, activityByWorkflow);
  const multis = multiBadges(activityByWorkflow);
  return (
    <div>
      <h2>You have earned these badges</h2>
        { Object.keys(taxons).sort().map((g, i) =>
          <div className="badges" key={i}>
          { taxons[g].map((b, j) =>
              <div className="badge" key={j}>
                <img src={require(`images/badges/${b.badge}`)} alt={`${b.name}`}></img>
                <div className="description">
                  {`The ${b.name} badge is earned for transcribing ${b.count} ${b.group}
                    ${pluralize('records', b.count)}`}
                </div>
              </div>
          )}
          </div>
        )}
        { multis.length
          ? <div className="badges">
              { multis.map((b, j) =>
                <div className="badge" key={j}>
                  <img src={require(`images/badges/${b.badge}`)} alt={`${b.name}`}></img>
                  <div className="description">
                    {`The ${b.name} badge is earned for transcribing
                      ${b.count} ${pluralize('records', b.count)}
                      in ${b.expeditions} expeditions`}
                  </div>
                </div>
              )}
            </div>
          : ''
        }
  </div>
  );
};

FieldBookBadges.propTypes = {
  allWorkflows: PropTypes.array,
  activityByWorkflow: PropTypes.object,
};
