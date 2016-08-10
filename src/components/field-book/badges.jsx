import React, { Component, PropTypes } from 'react';
import { taxonBadges, multiBadges, crossBadges } from 'helpers/badge-groups';

export class FieldBookBadges extends Component {
  badges(earned, keyPrefix, i = 1) {
    return (earned.length
      ? <div key={`${keyPrefix}${i}`}>
          {earned.map((b, j) =>
            <div className="badge" key={j}>
              <img src={require(`images/badges/${b.badge}`)} alt={`${b.name}`}></img>
              <div className="badge-name">{`The ${b.name} badge`}</div>
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
      <div className="badge-container">
        <h3>Badges Earned</h3>
        <hr />
        { Object.keys(taxons).sort().map((g, i) => this.badges(taxons[g], 't', i))}
        { this.badges(multis, 'm') }
        { this.badges(cross, 'c') }
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
