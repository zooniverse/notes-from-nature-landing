import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from 'components/header';
import { FatFooter } from 'components/fat-footer';
import { FieldBookBadges } from 'components/field-book/badges';
import { FieldBookExpeditions } from 'components/field-book/expeditions';
import { FieldBookTranscriptions } from 'components/field-book/transcriptions';
import { fetchProjectPreferences, fetchOldProjectPreferences } from 'actions/project-preferences';
import { fetchClassifications } from 'actions/classifications';
import { totalCount } from 'helpers/badge-groups';
import { pluralize } from 'helpers/text';
import { NfNLogoVertical } from 'components/logos/nfn-logo-vertical';

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
    if (user) {
      return (
        <div className="field-book">
          <NfNLogoVertical />
          <div className="hero">
            <Header bgClass={'transparent'} />
            <h2 className="name">{`${user.display_name}'s Field Book`}</h2>
            <h4 className="total">
              {`You have transcribed ${total} ${pluralize('records', total)}`}
            </h4>
          </div>
          <div className="content">
            <div className="left-content">
              <FieldBookExpeditions allWorkflows={allWorkflows} classifications={classifications} />
              <FieldBookTranscriptions subjects={subjects.subjects} />
            </div>
            <div className="right-content">
              <FieldBookBadges allWorkflows={allWorkflows} activityByWorkflow={activityByWorkflow}
                activityCount={total} oldActivityCount={oldActivityCount}
              />
            </div>
          </div>
          <FatFooter />
        </div>
      );
    }
    return (
      <div className="field-book">
        <NfNLogoVertical />
        <div className="hero">
          <Header bgClass={'transparent'} />
          <h2 className="name">Please login to access your Field Book</h2>
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
