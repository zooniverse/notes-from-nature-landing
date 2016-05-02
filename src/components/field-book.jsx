import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from 'header';
import { FatFooter } from 'fat-footer';
import { Title } from 'title';

class FieldBook extends Component {
  render() {
    const { user } = this.props;
    console.log(user);
    return (
      <div>
        <Header />
        <div className="field-book">
          <Title title={`Field Book for ${user.display_name}`} />
          <hr />
        <FatFooter />
        </div>
      </div>
    );
  }
}

FieldBook.propTypes = {
  dispatch: PropTypes.func,
  project: PropTypes.object,
  workflows: PropTypes.array,
  inactiveWorkflows: PropTypes.array,
  user: PropTypes.object,
  initialised: PropTypes.bool,
};

function mapStateToProps(state) {
  return {
    user: state.login.user,
    initialised: state.login.initialised,
    project: state.landing.project,
    workflows: state.landing.workflows,
    inactiveWorkflows: state.landing.inactiveWorkflows,
  };
}

export default connect(mapStateToProps)(FieldBook);
