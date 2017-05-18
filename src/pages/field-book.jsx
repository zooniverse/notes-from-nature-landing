import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Hero } from 'components/hero';
import { FatFooter } from 'components/fat-footer';
import { FieldBookBadges } from 'components/field-book/badges';
import { FieldBookExpeditions } from 'components/field-book/expeditions';
import { FieldBookTranscriptions } from 'components/field-book/transcriptions';
import { totalCount } from 'helpers/badge-groups';
import { pluralize } from 'helpers/text';

const FieldBook = ({ user, workflows, projectPreferences, recents, talk }) => {
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
              recents={recents.recents}
              allWorkflows={workflows.allWorkflows}
            />
          </div>
          <div className="right-content">
            <FieldBookBadges
              allWorkflows={workflows.allWorkflows}
              activityByWorkflow={projectPreferences.activityByWorkflow}
              activityCount={total}
              oldActivityCount={projectPreferences.oldActivityCount}
              commentCount={talk.commentCount}
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
  talk: PropTypes.object,
  recents: PropTypes.object,
  workflows: PropTypes.object,
  projectPreferences: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    user: state.login.user,
    talk: state.talk,
    recents: state.recents,
    workflows: state.workflows,
    projectPreferences: state.projectPreferences,
  };
}

export default connect(mapStateToProps)(FieldBook);
