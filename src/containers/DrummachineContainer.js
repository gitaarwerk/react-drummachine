import { connect } from 'react-redux';
import * as actions from '../actions/Drummachine';
import Drummachine from '../components/Drummachine';
import bpmToTimePulse from '../utils/bpmToTimePulse';
import bpmPartToTimePulse from '../utils/bpmPartToTimePulse';
// import createSample from '../utils/createSample';
import sampleList from '../samples/sampleList';

let loaded = 0;

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const {
    resetPattern,
    bpmTick,
    bpmPartTick,
    setBpm,
    loadSample,
    playPattern,
    samplesAreLoaded
  } = dispatchProps;
  const {
    bpmLightState,
    bpm,
    beatPerMeasure,
    audioBuffer,
    pattern,
    currentBeatPart,
    samplesLoaded,
    selectedPattern
  } = stateProps;
  const { audioContext } = ownProps;

  bpmToTimePulse(bpm, bpmTick);
  bpmPartToTimePulse(bpm, beatPerMeasure, bpmPartTick);

  const loadAllSamples = () => {
    if (samplesLoaded === false && loaded === 0) {
      sampleList.map(sample => loadSample({ sample, audioContext }));
      samplesAreLoaded();
      loaded = 1;
      // resetPattern();
    }
  };

  loadAllSamples();

  const onClickTestSound = () => {
    playPattern({
      audioBuffer,
      pattern,
      currentBeatPart
    });
  };

  return {
    bpm,
    selectedPattern,
    pattern,
    setBpm: event => setBpm(event.target.value),
    onClickTestSound,
    bpmLightState,
    selectedSample: sampleList[selectedPattern].name || 'none'
  };
};

function mapStateToProps({
  drummachine: {
    bpmLightState,
    bpm,
    beatPerMeasure,
    samples,
    audioBuffer,
    pattern,
    currentBeatPart,
    samplesLoaded,
    selectedPattern
  }
}) {
  return {
    bpmLightState,
    bpm,
    beatPerMeasure,
    samples,
    audioBuffer,
    pattern,
    currentBeatPart,
    samplesLoaded,
    selectedPattern
  };
}

export default connect(mapStateToProps, actions, mergeProps)(Drummachine);
