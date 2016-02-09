import React from 'react';

export default class Subcollections extends React.Component {
  render() {
    const subcollections = this.props.data[this.props.params.index].subcollections;
    console.log('subcollections');

    return (
      <div>
        <h2>Subcollections</h2>
        {subcollections.map((item) =>
          <div key={item.displayName}>
            <a href={item.url}>
              <img src={item.backgroundImage}/>
              <h3>{item.displayName}</h3>
              <p>{item.description}</p>
            </a>
          </div>
        )}
      </div>
    );
  }
}

Subcollections.propTypes = {
  data: React.PropTypes.array,
  params: React.PropTypes.object,
};
