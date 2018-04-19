import React, { PropTypes } from 'react';
import Header from 'components/header';
import { NfNLogoVertical } from 'components/logos/nfn-logo-vertical';

export const Hero = ({ title, subtitle, credit = '' }) =>
  <div className="hero" title={credit}>
    <NfNLogoVertical />
    <Header bgClass={'transparent'} />
    <a href="https://blog.notesfromnature.org/2018/04/19/notes-from-nature-and-the-florida-museum-launch-the-take-a-note-for-earth-day-campaign/"
      target="_blank"
    >
      <img className="event-banner"
        src={ require('images/background/earth_day.png') }
        alt="Earth Day celebration"
      >
      </img>
    </a>
    <h2 className="title">{title}</h2>
    <h4 className="subtitle">{subtitle}</h4>
  </div>;

Hero.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  credit: PropTypes.string,
};
