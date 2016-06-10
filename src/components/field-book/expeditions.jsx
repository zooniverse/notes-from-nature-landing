import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { earnedBadges } from 'helpers/badge-groups';
import { pluralize } from 'helpers/text';

const FieldBookExpeditions = ({ workflows, activity_count_by_workflow }) => {
  const badges = earnedBadges(workflows, activity_count_by_workflow);
  return (
    <div>
      <h2>You have earned these badges</h2>
      <div className="expeditions">
        { badges.map((b, i) =>
          <div className="badge" key={i}>
            <img src={require(`images/badges/${b.badge}`)} alt={`${b.name}`}></img>
            <div className="description">
              {`The ${b.name} badge is earned for transcrbing ${b.count} ${b.group}
                ${pluralize('records', b.count)}`}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

FieldBookExpeditions.propTypes = {
  workflows: PropTypes.array,
  activity_count_by_workflow: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    workflows: state.workflows.workflows,
    activity_count_by_workflow: state.projectPreferences.activity_count_by_workflow,
  };
}

export default connect(mapStateToProps)(FieldBookExpeditions);
