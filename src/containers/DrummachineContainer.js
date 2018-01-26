import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/Drummachine';
import Drummachine from '../components/Drummachine';
import bpmToTimePulse from '../utils/bpmToTimePulse';
import bpmPartToTimePulse from '../utils/bpmPartToTimePulse';
import sampleList from '../samples/sampleList';

class DrummachineContainer extends Component {
  componentWillMount() {
    this.props.sampleList.map(sample =>
      this.props.functions.loadSample({ sample, audioContext: this.props.audioContext })
    );
  }

  componentDidMount() {
    this.props.functions.samplesAreLoaded();
  }

  render() {
    return (
      <Drummachine
        selectedSample={this.props.selectedSample}
        bpmLightState={this.props.bpmLightState}
        onClickTestSound={this.props.onClickTestSound}
        setBpm={this.props.setBpm}
        pattern={this.props.pattern}
        bpm={this.props.bpm}
        selectedPattern={this.props.selectedPattern}
      />
    );
  }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const {
    bpmTick,
    bpmPartTick,
    setBpm,
    loadSample,
    playPattern,
    samplesAreLoaded,
    playSounds
  } = dispatchProps;
  const {
    bpmLightState,
    bpm,
    beatPerMeasure,
    audioBuffer,
    pattern,
    currentBeatPart,
    selectedPattern
  } = stateProps;
  const { audioContext } = ownProps;

  bpmToTimePulse(bpm, bpmTick);
  bpmPartToTimePulse(bpm, beatPerMeasure, bpmPartTick);

  const soundsToBePlayed = sampleList.filter((sample, index) => {
    return pattern[index][currentBeatPart];
  });

  playSounds(soundsToBePlayed);

  const onClickTestSound = () => {
    playPattern({
      audioBuffer,
      pattern,
      currentBeatPart
    });
  };

  return {
    bpm,
    sampleList,
    selectedPattern,
    pattern,
    audioContext,
    setBpm: event => {
      setBpm(event.target.value);
    },
    onClickTestSound,
    bpmLightState,
    selectedSample: sampleList[selectedPattern].name || 'none',
    functions: { samplesAreLoaded, loadSample }
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

export default connect(mapStateToProps, actions, mergeProps)(DrummachineContainer);
