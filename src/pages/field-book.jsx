import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from 'components/header';
import { FatFooter } from 'components/fat-footer';
import { Title } from 'components/title';
import { FieldBookBadges } from 'components/field-book/badges';
import { FieldBookExpeditions } from 'components/field-book/expeditions';
import { FieldBookTranscriptions } from 'components/field-book/transcriptions';
import { fetchProjectPreferences } from 'actions/project-preferences';
import { fetchClassifications } from 'actions/classifications';
import { totalCount } from 'helpers/badge-groups';
import { pluralize } from 'helpers/text';

class FieldBook extends Component {
  componentDidMount() {
    if (this.props.user) {
      this.props.dispatch(fetchProjectPreferences(this.props.user.id));
      this.props.dispatch(fetchClassifications(this.props.user.id));
    }
  }

  render() {
    const { user, allWorkflows, activityByWorkflow, classifications, subjects } = this.props;
    const total = totalCount(activityByWorkflow);
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
          <FieldBookTranscriptions subjects={subjects} />
          <FieldBookBadges allWorkflows={allWorkflows} activityByWorkflow={activityByWorkflow} />
        </div>
        <FatFooter />
      </div>
    );
  }
}

FieldBook.propTypes = {
  dispatch: PropTypes.func,
  user: PropTypes.object.isRequired,
  subjects: PropTypes.array,
  allWorkflows: PropTypes.array,
  classifications: PropTypes.array,
  activityByWorkflow: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    user: state.login.user,
    subjects: state.subjects.subjects,
    allWorkflows: state.workflows.allWorkflows,
    classifications: state.classifications.classifications,
    activityByWorkflow: state.projectPreferences.activityByWorkflow,
  };
}

export default connect(mapStateToProps)(FieldBook);
