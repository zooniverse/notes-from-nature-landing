import React from 'react';

export default class Subcollections extends React.Component {
  render() {
    const { subcollections } = this.props.collections[this.props.params.index];

    return (
      <div>
        <h2>Subcollections</h2>
        {subcollections.map((item) =>
          <div key={item.displayName}>
            <a href={item.url}>
              <img src={item.image} height="220" width="320" />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </a>
          </div>
        )}
      </div>
    );
  }
}

Subcollections.propTypes = {
  collections: React.PropTypes.array,
  params: React.PropTypes.object,
};
