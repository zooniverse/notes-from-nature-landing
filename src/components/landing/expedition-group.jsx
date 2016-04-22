import React, { Component, PropTypes } from 'react';

export default class LandingExpeditionGroup extends Component {
  render() {
    const { group, workflows } = this.props;
    return (
      <div className="about">
        <h1>{ group }</h1>
        <p>{ workflows }</p>
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
