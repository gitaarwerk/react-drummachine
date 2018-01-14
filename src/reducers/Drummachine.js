import * as types from '../actionTypes/Drummachine';
import * as patternUtils from '../utils/pattern';

const initialState = {
  selectedPattern: 0,
  bpm: 120,
  bpmLightState: false,
  bpmPartLightState: false,
  currentBeat: 0,
  currentBeatPart: 0,
  beatPerMeasure: 4,
  measure: 4,
  currentMeasure: 0,
  samples: [],
  audioBuffer: {},
  samplesLoaded: false,
  pattern: patternUtils.createEmptyPattern()
};

export default function reduce(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_SAMPLE_SUCCESS:
      return {
        ...state,
        samples: [...state.samples, action.payload],
        audioBuffer: {
          ...state.audioBuffer,
          [action.payload.sample.channel]: Array(state.beatPerMeasure * state.measure).fill(
            action.payload.audioBuffer
          )
        }
      };
    case types.SET_BPM:
      return {
        ...state,
        bpm: action.payload
      };
    case types.BPM_TICK:
      return {
        ...state,
        bpmLightState: true,
        currentBeat: state.currentBeat + 1
      };
    case types.BPM_TOCK:
      return {
        ...state,
        bpmLightState: false
      };
    case types.BPM_PART_TICK:
      return {
        ...state,
        bpmPartLightState: true,
        currentBeatPart: state.currentBeatPart < 15 ? state.currentBeatPart + 1 : 0
      };
    case types.BPM_PART_TOCK:
      return {
        ...state,
        bpmPartLightState: false
      };
    case types.SAMPLES_ARE_LOADED:
      return {
        ...state,
        samplesLoaded: true
      };
    case types.SELECT_SAMPLE_PATTERN:
      return {
        ...state,
        selectedPattern: action.payload
      };
    case types.RESET_PATTERN:
      return {
        ...state,
        pattern: patternUtils.createEmptyPattern()
      };
    case types.FLIP_PATTERN_SWITCH:
      return {
        ...state,
        pattern: patternUtils.flipSwitch(
          state.pattern,
          action.payload.patternId,
          action.payload.switchId
        )
      };
    default:
      return state;
  }
}
