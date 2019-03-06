import React, { PropTypes } from 'react';
import Header from 'components/header';
import { NfNLogoVertical } from 'components/logos/nfn-logo-vertical';
import { Celebration } from 'components/celebration';


export const Hero = ({ credit = '' }) =>
  <div className="hero" title={credit}>
    <NfNLogoVertical />
    <Header bgClass={'transparent'} />
    <Celebration />
  </div>;

Hero.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  credit: PropTypes.string,
};
