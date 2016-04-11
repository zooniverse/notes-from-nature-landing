import React from 'react';

/* eslint "react/prefer-stateless-function": 1 */

export default class App extends React.Component {
  render() {
    return (
      <div className="landing-app">
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.object,
};
