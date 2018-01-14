import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PatternButton = ({
  patternPosition,
  onClickSetPattern,
  onClickSelectSample,
  sampleName,
  lightState,
  isCurrentPattern
}) => (
  <PButton>
    <PressButton lightState={lightState} onClick={onClickSetPattern} />
    <PressButtonLabel
      isCurrentPattern={isCurrentPattern}
      onClick={() => onClickSelectSample(patternPosition)}
    >
      {sampleName}
    </PressButtonLabel>
  </PButton>
);

PatternButton.propTypes = {
  onClickSetPattern: PropTypes.func,
  onClickSelectSample: PropTypes.func,
  sampleName: PropTypes.string
};

const PressButtonLabel = styled.div`
  display: block;
  border-radius: 15px;
  border: 1px solid red;
  margin-top: 8px;
  text-align: center;
  font-size: 11px;
  padding: 2px;
  cursor: pointer;
  color: ${({ isCurrentPattern }) => (isCurrentPattern === 1 ? 'white' : 'red')};
  background: ${({ isCurrentPattern }) => (isCurrentPattern === 1 ? 'red' : 'transparent')};

  &:hover {
    color: white;
    background: red;
  }
`;

const PressButton = styled.div`
  height: 80px;
  width: 50px;
  background: ${({ lightState }) =>
    lightState === 0
      ? '#AAAAAA'
      : lightState === 1
        ? '#FFFFFF'
        : lightState === 2 ? '#FF0000' : lightState === 3 ? 'orange' : ''};
`;

const PButton = styled.div`
  display: block;
  margin: 1px;
  position: relative;
`;

export default PatternButton;
