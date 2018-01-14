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
    <DisplaySection>
      <Display>
        <BpmIndicatorContainer />
        <SelectedSample>
          <SelectedSampleInfo>selected sample:</SelectedSampleInfo>
          <SelectedSampleSelected>{selectedSample}</SelectedSampleSelected>
        </SelectedSample>
      </Display>
      <BpmLightHolder>
        <BpmLightHolderInfo>bpm</BpmLightHolderInfo>
        <BpmLight lightState={bpmLightState} />
      </BpmLightHolder>
      <Logo>ReactDrum</Logo>
    </DisplaySection>
    <input type="number" value={bpm} onChange={setBpm} />
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

const Logo = styled.h1`
  margin: 0;
  padding: 0;
  font-family: 'mirageregular', sans-serif;
  font-size: 38px;
  color: #fff;
  font-weight: normal;
  position: absolute;
  right: 0;
  top: 0;
  letter-spacing: 1px;
`;

const DisplaySection = styled.div`
  display: flex;
  position: relative;
`;

const BpmLightHolder = styled.div`
  position: relative;
`;

const BpmLightHolderInfo = styled.div`
  font-size: 10px;
  text-align: center;
  color: #ca973f;
`;

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
  flex-wrap: wrap;
  margin-top: 70px;
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
  border-radius: 5px;
  border: 1px solid #282828;
  padding: 20px;
`;

export default Drummachine;
