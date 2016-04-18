import React, { Component } from 'react';
import { expeditions } from 'constants/expeditions';

export default class LandingExpeditionGroups extends Component {
  makeHref(expedition) {
    return `/#expeditions/${expedition.prefix}`;
  }
  render() {
    return (
      <div className="genera">
        <h3>Choose a Genre and Start Transcribing!</h3>
        <div className="links">
          {expeditions.map((expedition, i) =>
            <a href={this.makeHref(expedition)} key={i}>
              { React.createElement(expedition.icon) }
            </a>
          )}
        </div>
      </div>
    );
  }
}
