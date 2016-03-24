import React, { Component } from 'react';
import LandingLogoHerb from 'landing/logo/herb';
import LandingLogoBird from 'landing/logo/bird';
import LandingLogoInsect from 'landing/logo/insect';
import LandingLogoFungus from 'landing/logo/fungus';
import { expeditions } from 'constants/expeditions';

export default class LandingExpeditionGroups extends Component {
  makeHref(index) {
    if (expeditions.expeditions) {
      return `/#expeditions/${index}`;
    }
    return expeditions.url;
  }
  render() {
    return (
      <div className="links">
        <a href={this.makeHref(0)}>
          <LandingLogoHerb/>
        </a>
        <a href={this.makeHref(1)}>
          <LandingLogoInsect/>
        </a>
        <a href={this.makeHref(2)}>
          <LandingLogoBird/>
        </a>
        <a href={this.makeHref(3)}>
          <LandingLogoFungus/>
        </a>
      </div>
    );
  }
}
