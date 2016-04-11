import React from 'react';
import { expeditions } from 'constants/expeditions';

export const Expeditions = ({ params }) =>
  <div>
    <h2>Expeditions</h2>
    {expeditions[params.index].map((item, i) =>
      <div key={item.displayName} key={i}>
        <a href={item.url}>
          <img src={item.image} height="220" width="320" />
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </a>
      </div>
    )}
  </div>;

Expeditions.propTypes = {
  params: React.PropTypes.object,
};
