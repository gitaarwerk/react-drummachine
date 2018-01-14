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
    <PressButton lightState={lightState} onClick={() => onClickSetPattern(patternPosition)} />
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
  cursor: pointer;
  border-radius: 3px;
  background: ${({ lightState }) =>
    lightState === 0
      ? '#AAAAAA'
      : lightState === 1
        ? '#FFFFFF'
        : lightState === 2 ? '#FF0000' : lightState === 3 ? 'orange' : ''};

  box-shadow: ${({ lightState }) =>
    lightState === 1
      ? '0px 0px 10px 0px #FFF'
      : lightState === 2
        ? '0px 0px 10px 0px #FF0000'
        : lightState === 3 ? '0px 0px 10px 0px #FFAA00' : ''};

  opacity: 0.95;

  &:hover {
    opacity: 1;

    box-shadow: inset 0px 0px 20px 4px rgba(255, 200, 200, 0.7);
    position: relative;
    z-index: 2;
  }
`;

const PButton = styled.div`
  display: block;
  margin: 1px;
  position: relative;
`;

export default PatternButton;
