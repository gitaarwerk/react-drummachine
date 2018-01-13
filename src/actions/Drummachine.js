import { createAction as create } from 'redux-actions';
import * as types from '../actionTypes/Drummachine';

export const setBpm = create(types.SET_BPM);

export const loadSample = create(types.LOAD_SAMPLE);
export const loadSampleSuccess = create(types.LOAD_SAMPLE_SUCCESS);

export const playPattern = create(types.PLAY_PATTERN);

export const bpmTick = create(types.BPM_TICK);
export const bpmTock = create(types.BPM_TOCK);

export const bpmPartTick = create(types.BPM_PART_TICK);
export const bpmPartTock = create(types.BPM_PART_TOCK);
