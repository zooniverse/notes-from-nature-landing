import React, { Component, PropTypes } from 'react';

/* eslint "react/prefer-stateless-function": 1 */

export default class LandingExpeditionGroup extends Component {
  render() {
    const { group } = this.props;
    return (
      <div className="about">
        <h1>{ group }</h1>
        <div className="title">
            Notes From Nature
          <hr />
        </div>
      </div>
    );
  }
}

LandingExpeditionGroup.propTypes = {
  group: PropTypes.string,
  project: PropTypes.object,
  workflows: PropTypes.array,
};
