import React from 'react';
import styled from 'styled-components';

import BpmIndicatorContainer from '../containers/BpmIndicatorContainer';
import BpmLight from '../components/BpmLight';
import PatternButtonContainer from '../containers/PatternButtonContainer';

const Drummachine = ({
  selectedPattern,
  bpmLightState,
  pattern,
  onClickBpmUp,
  onClickTestSound
}) => (
  <Enclosure>
    <BpmLight lightState={bpmLightState} />
    <BpmIndicatorContainer />
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
    <RaiseBpm onClick={onClickBpmUp} />
  </Enclosure>
);

const PatternButtons = styled.div`
  display: flex;
`;

const PatternButton = styled(PatternButtonContainer)`
  border: 1px solid white;
`;

const RaiseBpm = styled.div`
  display: block;
  height: 10px;
  width: 10px;
  background: hotpink;
  cursor: pointer;
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
