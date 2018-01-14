import { connect } from 'react-redux';

import * as actions from '../actions/Drummachine';
import PatternButton from '../components/PatternButton';

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { currentBeatPart, samples } = stateProps;
  const { selectSamplePattern, flipPatternSwitch } = dispatchProps;
  const { patternPosition, patternState, isCurrentPattern, currentPattern } = ownProps;

  const patternLightState = currentBeatPart === patternPosition ? true : false;

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
    isCurrentPattern,
    sampleName: samples[patternPosition] ? samples[patternPosition].sample.name : '',
    lightState: lightState(),
    onClickSetPattern: () =>
      flipPatternSwitch({ patternId: currentPattern, switchId: patternPosition }),
    onClickSelectSample: () => selectSamplePattern(patternPosition),
    patternState
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
