import React from 'react';
// import Collection from './Collection.js';

export default class Landing extends React.Component {

  render() {
    return (
      <div>
        <h2>Landing</h2>
        {this.props.data.map((item) =>
          <div>
            <h3>{item.displayName}</h3>
            <img src={item.backgroundImage}/>
            <p>{item.description}</p>
          </div>
        )}
      </div>
    );
  }
}

Landing.propTypes = {
  data: React.PropTypes.array,
};
