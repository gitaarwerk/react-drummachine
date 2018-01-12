import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import LED from './LED';

const BpmLight = ({ lightState }) => (
  <div>
    bpm:
    <LED lightState={lightState} />
  </div>
);

BpmLight.propTypes = {
  bpmLight: PropTypes.bool
};

export default BpmLight;
