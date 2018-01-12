import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BpmIndicator = ({ bpm }) => <BpmLed>{bpm}</BpmLed>;

BpmIndicator.propTypes = {
  bpm: PropTypes.number
};

const BpmLed = styled.div`
  color: red;
  background: #282828;
  display: inline-block;
  padding: 2px 3px;
`;

export default BpmIndicator;
