import React, { Component } from 'react';
import LandingExpeditionGroupHerb from 'landing/expedition-groups/herb';
import LandingExpeditionGroupBird from 'landing/expedition-groups/bird';
import LandingExpeditionGroupInsect from 'landing/expedition-groups/insect';
import LandingExpeditionGroupFungus from 'landing/expedition-groups/fungus';
import { expeditions } from 'constants/expeditions';

// Make Expedition links go to the correct page

export default class LandingExpeditionGroups extends Component {
  makeHref(index) {
    if (expeditions.expeditions) {
      return `/#expeditions/${index}`;
    }
    return expeditions.url;
  }
  render() {
    return (
      <div className="genera">
        <h3>Choose a Genre and Start Transcribing!</h3>
        <div className="links">
          <a href={this.makeHref(0)}>
            <LandingExpeditionGroupHerb/>
          </a>
          <a href={this.makeHref(1)}>
            <LandingExpeditionGroupInsect/>
          </a>
          <a href={this.makeHref(2)}>
            <LandingExpeditionGroupBird/>
          </a>
          <a href={this.makeHref(3)}>
            <LandingExpeditionGroupFungus/>
          </a>
        </div>
      </div>
    );
  }
}
