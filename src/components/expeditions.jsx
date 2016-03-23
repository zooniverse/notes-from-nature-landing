import React from 'react';
import { expeditions } from 'constants/expeditions';

export default class Expeditions extends React.Component {
  render() {
    const { expeditionList } = expeditions[this.props.params.index];

    return (
      <div>
        <h2>Expeditions</h2>
        {expeditionList.map((item, i) =>
          <div key={item.displayName} key={i}>
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

Expeditions.propTypes = {
  expeditions: React.PropTypes.array,
  params: React.PropTypes.object,
};
