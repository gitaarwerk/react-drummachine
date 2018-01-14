import { connect } from 'react-redux';
import * as actions from '../actions/Drummachine';
import Drummachine from '../components/Drummachine';
import bpmToTimePulse from '../utils/bpmToTimePulse';
import bpmPartToTimePulse from '../utils/bpmPartToTimePulse';
// import createSample from '../utils/createSample';
import sampleList from '../samples/sampleList';

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { bpmTick, bpmPartTick, setBpm, loadSample, playPattern, samplesAreLoaded } = dispatchProps;
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
  const bpmUp = () => setBpm(bpm + 100);

  bpmToTimePulse(bpm, bpmTick);
  bpmPartToTimePulse(bpm, beatPerMeasure, bpmPartTick);

  const loadAllSamples = async () => {
    if (samplesLoaded === false) {
      await sampleList.map(sample => loadSample({ sample, audioContext }));
      await samplesAreLoaded();
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
    onClickBpmUp: bpmUp,
    onClickTestSound,
    bpmLightState
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
