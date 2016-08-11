import React, { PropTypes } from 'react';
import Header from 'components/header';
import { NfNLogoVertical } from 'components/logos/nfn-logo-vertical';

export const Hero = ({ title, subtitle }) =>
  <div className="hero">
    <NfNLogoVertical />
    <Header bgClass={'transparent'} />
    <h2 className="title">{title}</h2>
    <h4 className="subtitle">{subtitle}</h4>
  </div>;

Hero.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};
