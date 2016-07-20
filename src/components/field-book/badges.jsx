import React, { Component, PropTypes } from 'react';
import { taxonBadges, multiBadges, crossBadges } from 'helpers/badge-groups';

export class FieldBookBadges extends Component {
  badges(earned, i = 1) {
    return (earned.length
      ? <div className="badges" key={i}>
          {earned.map((b, j) =>
            <div className="badge" key={j}>
              <img src={require(`images/badges/${b.badge}`)} alt={`${b.name}`}></img>
              <div className="description">{b.description}</div>
            </div>
          )}
        </div>
      : ''
    );
  }
  render() {
    const { allWorkflows, activityByWorkflow, activityCount, oldActivityCount } = this.props;
    const taxons = taxonBadges(allWorkflows, activityByWorkflow);
    const multis = multiBadges(activityByWorkflow);
    const cross = crossBadges(activityCount, oldActivityCount);
    return (
      <div>
        <h2>You have earned these badges</h2>
          { Object.keys(taxons).sort().map((g, i) => this.badges(taxons[g], i))}
          { this.badges(multis) }
          { this.badges(cross) }
      </div>
    );
  }
}

FieldBookBadges.propTypes = {
  allWorkflows: PropTypes.array,
  activityByWorkflow: PropTypes.object,
  activityCount: PropTypes.number,
  oldActivityCount: PropTypes.number,
};
