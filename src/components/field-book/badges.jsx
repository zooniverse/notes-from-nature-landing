import React, { Component, PropTypes } from 'react';
import { taxonBadges, multiBadges, crossBadges, talkBadges } from 'helpers/badge-groups';

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
    const {
      allWorkflows,
      activityByWorkflow,
      activityCount,
      oldActivityCount,
      commentCount } = this.props;
    const taxons = taxonBadges(allWorkflows, activityByWorkflow);
    const multis = multiBadges(activityByWorkflow);
    const cross = crossBadges(activityCount, oldActivityCount);
    const talk = talkBadges(commentCount);
    return (
      <div className="badge-container">
        <h3>Badges Earned</h3>
        <hr />
        { Object.keys(taxons).sort().map((g, i) => this.badges(taxons[g], 'taxon', i))}
        { this.badges(multis, 'multis') }
        { this.badges(cross, 'cross') }
        { this.badges(talk, 'talk') }
      </div>
    );
  }
}

FieldBookBadges.propTypes = {
  allWorkflows: PropTypes.array,
  activityByWorkflow: PropTypes.object,
  commentCount: PropTypes.number,
  activityCount: PropTypes.number,
  oldActivityCount: PropTypes.number,
};
