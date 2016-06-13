import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { earnedBadges } from 'helpers/badge-groups';
import { pluralize } from 'helpers/text';

const FieldBookTranscriptions = ({ workflows, activity_count_by_workflow }) => {
  const badges = earnedBadges(workflows, activity_count_by_workflow);
  return (
    <div>
      <h2>Recent Transcriptions</h2>
      <div className="transcriptions">
        { badges.map((b, i) =>
          <div className="transcription" key={i}>
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

FieldBookTranscriptions.propTypes = {
  workflows: PropTypes.array,
  activity_count_by_workflow: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    workflows: state.workflows.workflows,
    activity_count_by_workflow: state.projectPreferences.activity_count_by_workflow,
  };
}

export default connect(mapStateToProps)(FieldBookTranscriptions);
