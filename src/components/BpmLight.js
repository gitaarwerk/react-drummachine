import React from 'react';
import PropTypes from 'prop-types';

import LED from './LED';

const BpmLight = ({ lightState }) => (
  <div>
    <LED lightState={true} />
  </div>
);

BpmLight.propTypes = {
  bpmLight: PropTypes.bool
};

export default BpmLight;
