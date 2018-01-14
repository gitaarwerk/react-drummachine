import { connect } from 'react-redux';
import * as actions from '../actions/Drummachine';
import Drummachine from '../components/Drummachine';
import bpmToTimePulse from '../utils/bpmToTimePulse';
import bpmPartToTimePulse from '../utils/bpmPartToTimePulse';
// import createSample from '../utils/createSample';
import sampleList from '../samples/sampleList';

let samplesLoaded = 0;

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { bpmTick, bpmPartTick, setBpm, loadSample, playPattern } = dispatchProps;
  const { bpmLightState, bpm, beatPerMeasure, audioBuffer, pattern, currentBeatPart } = stateProps;
  const { audioContext } = ownProps;
  const bpmUp = () => setBpm(bpm + 100);

  bpmToTimePulse(bpm, bpmTick);
  bpmPartToTimePulse(bpm, beatPerMeasure, bpmPartTick);

  const loadAllSamples = async () => {
    if (samplesLoaded === 0) {
      await sampleList.map(sample => loadSample({ sample, audioContext }));

      samplesLoaded = 1;
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
    pattern,
    onClickBpmUp: bpmUp,
    onClickTestSound
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
    currentBeatPart
  }
}) {
  return {
    bpmLightState,
    bpm,
    beatPerMeasure,
    samples,
    audioBuffer,
    pattern,
    currentBeatPart
  };
}

export default connect(mapStateToProps, actions, mergeProps)(Drummachine);
