import { connect } from 'react-redux';
import * as actions from '../actions/Drummachine';
import Drummachine from '../components/Drummachine';
import bpmToTimePulse from '../utils/bpmToTimePulse';
import bpmPartToTimePulse from '../utils/bpmPartToTimePulse';
import readSample from '../utils/readSample';
import testSample from '../samples/sample.wav';

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { bpmTick, bpmPartTick, setBpm, loadSample } = dispatchProps;
  const { bpm, beatPerMeasure, sampleBuffer } = stateProps;
  const { audioContext } = ownProps;
  const bpmUp = () => setBpm(bpm + 100);

  bpmToTimePulse(bpm, bpmTick);
  bpmPartToTimePulse(bpm, beatPerMeasure, bpmPartTick);
  loadSample(readSample(testSample));
  const source = audioContext.createBufferSource();
  const onClickTestSound = async () => {
    const sample = sampleBuffer[0];

    audioContext.decodeAudioData(sample, buffer => {
      // creates a sound source
      source.buffer = buffer; // tell the source which sound to play
      source.connect(audioContext.destination); // connect the source to the context's destination (the speakers)
      source.start(0); // play the source now
    });
  };

  return {
    bpm,
    onClickBpmUp: bpmUp,
    onClickTestSound
  };
};

function mapStateToProps({ drummachine: { bpm, beatPerMeasure, sampleBuffer } }) {
  return {
    bpm,
    beatPerMeasure,
    sampleBuffer
  };
}

export default connect(mapStateToProps, actions, mergeProps)(Drummachine);
