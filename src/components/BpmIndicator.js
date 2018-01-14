import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BpmIndicator = ({ bpm }) => <BpmLed>{bpm}</BpmLed>;

BpmIndicator.propTypes = {
  bpm: PropTypes.number
};

const BpmLed = styled.div`
  color: inherit;
  font-family: 'digital-7_monomono', sans-serif;
  display: inline-block;
  padding: 2px 3px;
  font-size: 40px;
`;

export default BpmIndicator;
