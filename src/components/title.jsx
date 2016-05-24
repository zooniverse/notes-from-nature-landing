import React, { PropTypes } from 'react';

export const Title = ({ title }) =>
  <div className="title">
    <span>Notes&nbsp;</span>
    <span className="smaller">from</span>
    <span>&nbsp;Nature</span>
    <h3 className="title-text">{title}</h3>
  </div>;

Title.propTypes = {
  title: PropTypes.string,
};
