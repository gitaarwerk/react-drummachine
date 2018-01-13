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
  const { bpm, beatPerMeasure, samples, audioBuffer, pattern, currentBeatPart } = stateProps;
  const { audioContext } = ownProps;
  const bpmUp = () => setBpm(bpm + 100);

  const loadAllSamples = async () => {
    if (samplesLoaded === 0) {
      await sampleList.map(sample => loadSample({ sample, audioContext }));
      await bpmToTimePulse(bpm, bpmTick);
      await bpmPartToTimePulse(bpm, beatPerMeasure, () => {
        bpmPartTick();
        // playPattern({
        //   audioBuffer,
        //   pattern,
        //   currentBeatPart
        // });
      });
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
    // if (audioBuffer.length > 0) audioBuffer[1].pop().audioBuffer.start(0);
  };

  return {
    bpm,
    onClickBpmUp: bpmUp,
    onClickTestSound
  };
};

function mapStateToProps({
  drummachine: { bpm, beatPerMeasure, samples, audioBuffer, pattern, currentBeatPart }
}) {
  return {
    bpm,
    beatPerMeasure,
    samples,
    audioBuffer,
    pattern,
    currentBeatPart
  };
}

export default connect(mapStateToProps, actions, mergeProps)(Drummachine);
