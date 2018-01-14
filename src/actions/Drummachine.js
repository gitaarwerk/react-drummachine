import { createAction as create } from 'redux-actions';
import * as types from '../actionTypes/Drummachine';

export const setBpm = create(types.SET_BPM);

export const bpmTick = create(types.BPM_TICK);
export const bpmTock = create(types.BPM_TOCK);

export const bpmPartTick = create(types.BPM_PART_TICK);
export const bpmPartTock = create(types.BPM_PART_TOCK);

export const loadSample = create(types.LOAD_SAMPLE);
export const loadSampleSuccess = create(types.LOAD_SAMPLE_SUCCESS);
export const samplesAreLoaded = create(types.SAMPLES_ARE_LOADED);

export const selectSamplePattern = create(types.SELECT_SAMPLE_PATTERN);
export const resetPattern = create(types.RESET_PATTERN);
export const flipPatternSwitch = create(types.FLIP_PATTERN_SWITCH);

export const playPattern = create(types.PLAY_PATTERN);
