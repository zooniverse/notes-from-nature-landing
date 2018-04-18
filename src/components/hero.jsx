import React, { PropTypes } from 'react';
import Header from 'components/header';
import { NfNLogoVertical } from 'components/logos/nfn-logo-vertical';

export const Hero = ({ title, subtitle, credit = '' }) =>
  <div className="hero" title={credit}>
    <NfNLogoVertical />
    <Header bgClass={'transparent'} />
    <img className="event-banner"
      src={ require('images/background/Notes_From_Nature.png') }
      alt="Earth Day celebration"
    >
    </img>
    <h2 className="title">{title}</h2>
    <h4 className="subtitle">{subtitle}</h4>
  </div>;

Hero.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  credit: PropTypes.string,
};
