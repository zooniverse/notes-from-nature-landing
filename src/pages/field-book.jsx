import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Hero } from 'components/hero';
import { FatFooter } from 'components/fat-footer';
import { FieldBookBadges } from 'components/field-book/badges';
import { FieldBookExpeditions } from 'components/field-book/expeditions';
import { FieldBookTranscriptions } from 'components/field-book/transcriptions';
import { totalCount } from 'helpers/badge-groups';
import { pluralize } from 'helpers/text';

const FieldBook = ({ user, workflows, projectPreferences, classifications, subjects }) => {
  const total = totalCount(projectPreferences.activityByWorkflow);
  if (user) {
    return (
      <div className="field-book">
        <Hero
          title={`${user.display_name}'s Field Book`}
          subtitle={`You have transcribed ${total} ${pluralize('records', total)}`}
        />
        <div className="content">
          <div className="left-content">
            <FieldBookExpeditions
              allWorkflows={workflows.allWorkflows}
              activityByWorkflow={projectPreferences.activityByWorkflow}
            />
            <FieldBookTranscriptions
              subjects={subjects.subjects}
              allWorkflows={workflows.allWorkflows}
              classifications={classifications.classifications}
            />
          </div>
          <div className="right-content">
            <FieldBookBadges
              allWorkflows={workflows.allWorkflows}
              activityByWorkflow={projectPreferences.activityByWorkflow}
              activityCount={total}
              oldActivityCount={projectPreferences.oldActivityCount}
            />
          </div>
        </div>
        <FatFooter />
      </div>
    );
  }
  return (
    <div className="field-book">
      <Hero img="" title="Please login to access your Field Book" subtitle="" />
      <FatFooter />
    </div>
  );
};

FieldBook.propTypes = {
  dispatch: PropTypes.func,
  user: PropTypes.object,
  subjects: PropTypes.object,
  workflows: PropTypes.object,
  classifications: PropTypes.object,
  projectPreferences: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    user: state.login.user,
    subjects: state.subjects,
    workflows: state.workflows,
    classifications: state.classifications,
    projectPreferences: state.projectPreferences,
  };
}

export default connect(mapStateToProps)(FieldBook);
