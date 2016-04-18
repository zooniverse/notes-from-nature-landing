import React from 'react';

export const ExpeditionGroup = () =>
  <div>
    <h2>Expeditions</h2>
  </div>;

ExpeditionGroup.propTypes = {
  params: React.PropTypes.object,
  workflows: React.PropTypes.array,
};
