import React from 'react';
import styled from 'styled-components';

import BpmIndicatorContainer from '../containers/BpmIndicatorContainer';
import BpmLightContainer from '../containers/BpmLightContainer';
import PatternButtonContainer from '../containers/PatternButtonContainer';

const Drummachine = ({ onClickBpmUp, onClickTestSound }) => (
  <Enclosure>
    <BpmLightContainer />
    <BpmIndicatorContainer />
    <p>This is the drum machine placeholder for further development.</p>
    <PatternButtons>
      <PatternButton patternPosition={0} onClickTestSound={onClickTestSound} />
      <PatternButton patternPosition={1} />
      <PatternButton patternPosition={2} />
      <PatternButton patternPosition={3} />
      <PatternButton patternPosition={4} />
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
