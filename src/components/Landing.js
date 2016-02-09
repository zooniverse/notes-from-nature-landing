import React from 'react';

export default class Landing extends React.Component {
  constructor(props) {
    super(props);
    this._checkForSubCollections = this._checkForSubCollections.bind(this);
  }

  _checkForSubCollections(collection) {
    if (collection.subCollections) {
      return `/#subCollections/${collection.subCollections}`;
    }
    return collection.url;
  }

  render() {
    const { collections } = this.props;
    return (
      <div>
        <h2>Landing</h2>
        {collections.map((collection, i) =>
          <div key={i}>
            <h3>{collection.name}</h3>
            <img src={require('../images/collections/img-collections3.jpg')} />
          </div>
         )}
      </div>
    );
  }
}

Landing.propTypes = {
  collections: React.PropTypes.array,
};
