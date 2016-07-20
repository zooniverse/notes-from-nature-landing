import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from 'components/header';
import { FatFooter } from 'components/fat-footer';
import { Title } from 'components/title';
import { FieldBookBadges } from 'components/field-book/badges';
import { FieldBookExpeditions } from 'components/field-book/expeditions';
import { FieldBookTranscriptions } from 'components/field-book/transcriptions';
import { fetchProjectPreferences, fetchOldProjectPreferences } from 'actions/project-preferences';
import { fetchClassifications } from 'actions/classifications';
import { totalCount } from 'helpers/badge-groups';
import { pluralize } from 'helpers/text';

class FieldBook extends Component {
  componentDidMount() {
    this.doDispatches();
  }

  componentDidUpdate() {
    this.doDispatches();
  }

  doDispatches() {
    if (this.props.user && this.props.user.id) {
      if (!Object.keys(this.props.activityByWorkflow).length) {
        this.props.dispatch(fetchProjectPreferences(this.props.user.id));
      }
      if (!this.props.classifications.length) {
        this.props.dispatch(fetchClassifications(this.props.user.id));
        this.props.dispatch(fetchOldProjectPreferences(this.props.user.id));
      }
    }
  }

  render() {
    const { user, allWorkflows, activityByWorkflow, oldActivityCount,
      classifications, subjects } = this.props;
    const total = totalCount(activityByWorkflow);
    if (user !== null) {
      return (
        <div>
          <Header />
          <div className="field-book">
            <div className="field-book-title">
              <Title title={`${user.display_name}'s Field Book`} />
            </div>
            <hr />
            <div className="statistics">
              <h2>{`You have transcribed ${total} ${pluralize('records', total)}`}</h2>
            </div>
            <FieldBookExpeditions allWorkflows={allWorkflows} classifications={classifications} />
            <FieldBookTranscriptions subjects={subjects.subjects} />
            <FieldBookBadges allWorkflows={allWorkflows} activityByWorkflow={activityByWorkflow}
              activityCount={total} oldActivityCount={oldActivityCount}
            />
          </div>
          <FatFooter />
        </div>
      );
    }
    return (
        <div>
          <Header />
          <div className="field-book">
            <div className="field-book-title">
              <Title title={'Please login to access your Field Book'} />
            </div>
          </div>
          <FatFooter />
        </div>
    );
  }
}

FieldBook.propTypes = {
  dispatch: PropTypes.func,
  user: PropTypes.object,
  subjects: PropTypes.object,
  allWorkflows: PropTypes.array,
  classifications: PropTypes.array,
  activityByWorkflow: PropTypes.object,
  oldActivityCount: PropTypes.number,
};

function mapStateToProps(state) {
  return {
    user: state.login.user,
    subjects: state.subjects,
    allWorkflows: state.workflows.allWorkflows,
    classifications: state.classifications.classifications,
    activityByWorkflow: state.projectPreferences.activityByWorkflow,
    oldActivityCount: state.projectPreferences.oldActivityCount,
  };
}

export default connect(mapStateToProps)(FieldBook);
