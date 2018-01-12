import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import LED from './LED';

const PatternButton = ({ lightState, onClick, patternPosition, sampleName }) => (
  <PButton>
    <PressButton onClick={onClick}>
      <LED lightState={lightState} />
      {patternPosition}
    </PressButton>
    <PressButtonLabel>- {sampleName} -</PressButtonLabel>
  </PButton>
);

PatternButton.propTypes = {
  lightState: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
  patternPosition: PropTypes.number.isRequired
};

const PressButtonLabel = styled.div`
  display: block;
  border-radius: 15px;
  border: 2px solid red;
  margin-top: 8px;
  text-align: center;
  font-size: 12px;
`;

const PressButton = styled.div`
  height: 80px;
  width: 50px;
  background: black;
`;

const PButton = styled.div`
  display: block;
`;

export default PatternButton;
