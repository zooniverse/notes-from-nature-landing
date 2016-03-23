import React, { Component, PropTypes } from 'react';

export default class LandingExpeditionGroup extends Component {
  makeHref(group, index) {
    if (group.expeditions) {
      return `/#expeditions/${index}`;
    }
    return group.url;
  }
  render() {
    const { group, index } = this.props;
    return (
      <a href={this.makeHref(group, index)}>
        <svg>
          <image xlinkHref={group.image}/>
        </svg>
      </a>
    );
  }
}

LandingExpeditionGroup.propTypes = {
  group: PropTypes.object,
  index: PropTypes.number,
};
