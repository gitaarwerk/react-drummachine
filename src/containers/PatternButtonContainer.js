import { connect } from 'react-redux';

import * as actions from '../actions/Drummachine';
import PatternButton from '../components/PatternButton';

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { currentBeatPart, samples, samplesLoaded } = stateProps;
  const { selectSamplePattern } = dispatchProps;
  const { patternPosition, patternState, isCurrentPattern } = ownProps;

  const patternLightState = currentBeatPart === patternPosition ? true : false;
  const sampleName = samplesLoaded
    ? samples[patternPosition] ? samples[patternPosition].sample.name : ''
    : '';

  const lightState = () => {
    // 0 = off
    // 1 = beat state
    // 2 = pattern state
    // 3 = pattern and beat state
    if (patternLightState && patternState) return 3;
    if (patternState) return 2;
    if (patternLightState) return 1;
    return 0;
  };

  return {
    isCurrentPattern: isCurrentPattern ? 1 : 0,
    sampleName,
    lightState: lightState(),
    onClickSetPattern: () => {
      console.log('pattern set');
    },
    onClickSelectSample: () => selectSamplePattern(patternPosition),
    patternState,
    onClick: () => {
      console.log('onClickTestSound');
      // onClickTestSound();
    }
  };
};

function mapStateToProps({ drummachine: { currentBeatPart, samples, samplesLoaded } }) {
  return {
    currentBeatPart,
    samples,
    samplesLoaded
  };
}

export default connect(mapStateToProps, actions, mergeProps)(PatternButton);
