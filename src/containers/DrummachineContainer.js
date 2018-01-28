import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/Drummachine';
import Drummachine from '../components/Drummachine';
import bpmToTimePulse from '../utils/bpmToTimePulse';
import bpmPartToTimePulse from '../utils/bpmPartToTimePulse';
import sampleList from '../samples/sampleList';
import BufferLoader from '../utils/bufferLoader';

let bufferList;
let finishedBufferLoading = false;

class DrummachineContainer extends Component {
  componentWillMount() {
    const finishedLoading = (buffer) => {
      bufferList = buffer;
      finishedBufferLoading = true;
    }
    const sampleArrayToLoad = Array(16).fill('').map((item, index) => { return sampleList[index].sampleUrl});

   const bufferLoader = new BufferLoader( this.props.audioContext, 
    sampleArrayToLoad,
    finishedLoading
    );
    bufferLoader.load();
  }



  componentWillReceiveProps(nextProps) {
    if (this.props.bpm !== nextProps.bpm) {
    this.props.startTimer();
    }}
    

  render() {
    return (
      <Drummachine
        selectedSample={this.props.selectedSample}
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
  } = dispatchProps;
  const {
    bpmLightState,
    bpm,
    beatPerMeasure,
    pattern,
    currentBeatPart,
    selectedPattern
  } = stateProps;
  const { audioContext } = ownProps;

  const startTimer = () => {
    bpmPartToTimePulse(bpm, beatPerMeasure, bpmPartTick);
  }
  bpmToTimePulse(bpm, bpmTick);
  
  function playSound() {
    const soundsToBePlayed = sampleList.filter((sample, index) => {
      return pattern[index][currentBeatPart]
    });

    soundsToBePlayed.map((item, index) => {
      const source = audioContext.createBufferSource();
      source.buffer = bufferList[item.index];

      source.connect(audioContext.destination);
      source.start(0);
    });
  }
  
  if (finishedBufferLoading === true) {
    playSound.immediate=1;
    playSound();
  }
  
 

  return {
    bpm,
    sampleList,
    selectedPattern,
    pattern,
    audioContext,
    setBpm: event => {
      setBpm(event.target.value);
    },
    bpmLightState,
    startTimer,
    selectedSample: sampleList[selectedPattern].name || 'none',
  };
};

function mapStateToProps({
  drummachine: {
    bpm,
    beatPerMeasure,
    samples,
    audioBuffer,
    pattern,
    currentBeatPart,
    selectedPattern
  }
}) {
  return {
    bpm,
    beatPerMeasure,
    samples,
    pattern,
    currentBeatPart,
    selectedPattern
  };
}

export default connect(mapStateToProps, actions, mergeProps)(DrummachineContainer);
