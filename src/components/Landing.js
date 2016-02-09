import React from 'react';

export default class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.makeHref = this.makeHref.bind(this);
  }

  makeHref(collection, i) {
    if (collection.subcollections) {
      return `/#subcollections/${i}`;
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
            <a href={this.makeHref(collection, i)}>
              <img src={collection.image}
                height="220" width="320"
              />
              <h3>{collection.name}</h3>
            </a>
          </div>
         )}
      </div>
    );
  }
}

Landing.propTypes = {
  collections: React.PropTypes.array,
};
