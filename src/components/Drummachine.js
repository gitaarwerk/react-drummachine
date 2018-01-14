import React from 'react';
import styled from 'styled-components';

import BpmIndicatorContainer from '../containers/BpmIndicatorContainer';
import BpmLight from '../components/BpmLight';
import PatternButtonContainer from '../containers/PatternButtonContainer';
import Display from './Display';
const Drummachine = ({
  selectedPattern,
  selectedSample,
  bpm,
  bpmLightState,
  pattern,
  onClickBpmUp,
  onClickTestSound,
  setBpm
}) => (
  <Enclosure>
    <Display>
      <BpmLight lightState={bpmLightState} />
      <BpmIndicatorContainer />
      <SelectedSample>
        <SelectedSampleInfo>selected sample:</SelectedSampleInfo>
        <SelectedSampleSelected>{selectedSample}</SelectedSampleSelected>
      </SelectedSample>
    </Display>
    <input type="number" value={bpm} onChange={setBpm} />
    <p>This is the drum machine placeholder for further development.</p>
    <PatternButtons>
      {pattern[selectedPattern].map((pattern, index) => {
        return (
          <PatternButton
            currentPattern={selectedPattern}
            isCurrentPattern={selectedPattern === index}
            patternState={pattern}
            key={index}
            patternPosition={index}
          />
        );
      })}
    </PatternButtons>
  </Enclosure>
);

const SelectedSampleInfo = styled.small`
  color: inherit;
  font-size: 10px;
  display: block;
  text-transform: uppercase;
`;

const SelectedSampleSelected = styled.div`
  font-size: 18px;
`;

const SelectedSample = styled.span`
  color: inherit;
  display: inline-block;
`;
const PatternButtons = styled.div`
  display: flex;
`;

const PatternButton = styled(PatternButtonContainer)`
  &:before {
    display: block;
    content: ' ';
    border: 1px solid white;
  }
`;

const Enclosure = styled.div`
  width: auto;
  height: auto;
  color: white;
  background: #43413d;
  border-radius: 3px;
  border: 1px solid #282828;
  padding: 20px;
`;

export default Drummachine;
