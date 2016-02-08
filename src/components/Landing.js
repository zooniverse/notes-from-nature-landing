import React from 'react';
// import Collection from './Collection.js';

export default class Landing extends React.Component {
  constructor(props) {
    super(props);
    this._checkForSubCollections = this._checkForSubCollections.bind(this);
  }

  _checkForSubCollections(item) {
    if (item.subCollections) {
      return '/#subCollections';
    }
    return 'http://www.zooniverse.org';
  }

  render() {
    return (
      <div>
        <h2>Landing</h2>
        {this.props.data.map((item) =>
          <div key={item.displayName}>
            <a href={this._checkForSubCollections(item)}>
              <h3>{item.displayName}</h3>
              <img src={item.backgroundImage}/>
              <p>{item.description}</p>
            </a>
          </div>
        )}
      </div>
    );
  }
}

Landing.propTypes = {
  data: React.PropTypes.array,
};
