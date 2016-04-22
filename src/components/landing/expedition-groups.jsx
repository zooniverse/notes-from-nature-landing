import React, { Component } from 'react';
import { Link } from 'react-router';
import { expeditions } from 'constants/expeditions';

export default class LandingExpeditionGroups extends Component {
  render() {
    return (
      <div className="genera">
        <h3>Choose a Group and Start Transcribing!</h3>
        <div className="links">
          {expeditions.map((expedition, i) =>
            <Link to={`/expedition-group/${expedition.group}`} key={i}>
              { React.createElement(expedition.icon) }
            </Link>
          )}
        </div>
      </div>
    );
  }
}
