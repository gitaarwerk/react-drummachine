import React from 'react';
import styled from 'styled-components';

import BpmIndicatorContainer from '../containers/BpmIndicatorContainer';
import BpmLight from '../components/BpmLight';
import PatternButtonContainer from '../containers/PatternButtonContainer';

const Drummachine = ({
  selectedPattern,
  bpm,
  bpmLightState,
  pattern,
  onClickBpmUp,
  onClickTestSound,
  setBpm
}) => (
  <Enclosure>
    <BpmLight lightState={bpmLightState} />
    <BpmIndicatorContainer />
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

const PatternButtons = styled.div`
  display: flex;
`;

const PatternButton = styled(PatternButtonContainer)`
  border: 1px solid white;
`;

const Enclosure = styled.div`
  width: 800px;
  height: 400px;
  background: #eee;
  border: 1px solid #282828;
  margin: 20px;
  padding: 20px;
`;

export default Drummachine;
