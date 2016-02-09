import React from 'react';

const mockImages = {
  'img-collections3.jpg': require('../images/collections/img-collections3.jpg'),
  'img-collections5.jpg': require('../images/collections/img-collections5.jpg'),
  'img-collections6.jpg': require('../images/collections/img-collections6.jpg'),
  'img-collections2.jpg': require('../images/collections/img-collections2.jpg'),
  'FSU_NFN_image.jpg': require('../images/collections/FSU_NFN_image.jpg'),
  'phylalower-herb.jpg': require('../images/collections/phylalower-herb.jpg'),
  'collection-list-bg.jpg': require('../images/collections/collection-list-bg.jpg'),
  'USF127737.jpg': require('../images/collections/USF127737.jpg'),
};

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
            <img src={mockImages[collection.image]}
              height="220" width="320"
            />
          </div>
         )}
      </div>
    );
  }
}

Landing.propTypes = {
  collections: React.PropTypes.array,
};
