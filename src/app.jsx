import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchProject } from 'actions/project';
import { fetchWorkflows } from 'actions/workflows';
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
  recents: PropTypes.object,
  talk: PropTypes.object,
  workflows: PropTypes.object,
  projectPreferences: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    user: state.login.user,
    project: state.project,
    recents: state.recents,
    workflows: state.workflows,
    talk: state.talk,
    projectPreferences: state.projectPreferences,
  };
}

export default connect(mapStateToProps)(App);
