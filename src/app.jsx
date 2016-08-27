import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchProject } from 'actions/project';
import { fetchWorkflows } from 'actions/workflows';
import { fetchProjectPreferences, fetchOldProjectPreferences } from 'actions/project-preferences';
import { fetchClassifications } from 'actions/classifications';
import * as status from 'constants/statuses';

class App extends Component {
  componentWillMount() {
    this.doDispatches(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.doDispatches(nextProps);
  }

  doDispatches(props) {
    if (props.project.status === status.FETCH_READY) {
      this.props.dispatch(fetchProject());
    }
    if (props.workflows.status === status.FETCH_READY) {
      this.props.dispatch(fetchWorkflows());
    }
    if (props.user && props.user.id) {
      if (props.projectPreferences.status === status.FETCH_READY) {
        props.dispatch(fetchProjectPreferences(props.user.id));
      }
      if (props.projectPreferences.oldStatus === status.FETCH_READY) {
        props.dispatch(fetchOldProjectPreferences(props.user.id));
      }
      // Classifications are filtered by workflows
      if (props.classifications.status === status.FETCH_READY
          && props.workflows.status === status.FETCH_COMPLETED) {
        props.dispatch(fetchClassifications(props.user.id));
      }
    }
  }

  render() {
    const { children } = this.props;
    return (
      <div>
        {React.cloneElement(children)}
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func,
  children: PropTypes.object,
  user: PropTypes.object,
  project: PropTypes.object,
  subjects: PropTypes.object,
  workflows: PropTypes.object,
  classifications: PropTypes.object,
  projectPreferences: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    user: state.login.user,
    project: state.project,
    subjects: state.subjects,
    workflows: state.workflows,
    classifications: state.classifications,
    projectPreferences: state.projectPreferences,
  };
}

export default connect(mapStateToProps)(App);
