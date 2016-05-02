import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div>
        {React.cloneElement(this.props.children)}
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.object,
};
