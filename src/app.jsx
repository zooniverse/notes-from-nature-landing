import React, { PropTypes } from 'react';

export const App = ({ children }) =>
  <div>
    {React.cloneElement(children)}
  </div>;

App.propTypes = {
  children: PropTypes.object,
};
