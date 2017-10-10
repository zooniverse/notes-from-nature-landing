import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchProjectPreferences, fetchOldProjectPreferences } from 'actions/project-preferences';
import { fetchRecents } from 'actions/recents';
import { fetchTalkUser } from 'actions/talk';
import * as status from 'constants/statuses';
import { Hero } from 'components/hero';
import { FatFooter } from 'components/fat-footer';
import { FieldBookBadges } from 'components/field-book/badges';
import { FieldBookExpeditions } from 'components/field-book/expeditions';
import { FieldBookTranscriptions } from 'components/field-book/transcriptions';
import { totalCount } from 'helpers/badge-groups';
import { pluralize } from 'helpers/text';

class FieldBook extends Component {
  componentWillMount() {
    this.doDispatches(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.doDispatches(nextProps);
  }

  doDispatches(props) {
    if (props.user && props.user.id) {
      if (props.projectPreferences.status === status.FETCH_READY) {
        props.dispatch(fetchProjectPreferences(props.user.id));
      }
      if (props.projectPreferences.oldStatus === status.FETCH_READY) {
        props.dispatch(fetchOldProjectPreferences(props.user.id));
      }
      if (props.recents.status === status.FETCH_READY) {
        props.dispatch(fetchRecents());
      }
      if (props.talk.status === status.FETCH_READY) {
        props.dispatch(fetchTalkUser(props.user.id));
      }
    }
  }

  render() {
    const total = totalCount(this.props.projectPreferences.activityByWorkflow);
    if (this.props.user) {
      return (
        <div className="field-book">
          <Hero
            title={`${this.props.user.display_name}'s Field Book`}
            subtitle={`You have transcribed ${total} ${pluralize('records', total)}`}
          />
          <div className="content">
            <div className="left-content">
              <FieldBookExpeditions
                allWorkflows={this.props.workflows.allWorkflows}
                activityByWorkflow={this.props.projectPreferences.activityByWorkflow}
              />
              <FieldBookTranscriptions
                recents={this.props.recents.recents}
                allWorkflows={this.props.workflows.allWorkflows}
              />
            </div>
            <div className="right-content">
              <FieldBookBadges
                allWorkflows={this.props.workflows.allWorkflows}
                activityByWorkflow={this.props.projectPreferences.activityByWorkflow}
                activityCount={total}
                oldActivityCount={this.props.projectPreferences.oldActivityCount}
                commentCount={this.props.talk.commentCount}
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
  }
}

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
