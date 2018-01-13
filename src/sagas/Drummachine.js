import { put, call, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { getAsArrayBuffer } from '../repositories/Drummachine';

import * as actions from '../actions/Drummachine';
import createSample from '../utils/createSample';

export function* bpmTock() {
  yield delay(300);
  yield put(actions.bpmTock());
}

export function* bpmPartTock() {
  yield delay(500);
  yield put(actions.bpmPartTock());
}

export function* loadSample({ payload }) {
  const { sample, audioContext } = payload;
  const { res: arrayBuffer, err } = yield call(() => getAsArrayBuffer(sample.sampleUrl));
  if (err) {
    console.log(err);
  } else {
    const audioBuffer = yield call(() => createSample(arrayBuffer, audioContext));
    yield put(actions.loadSampleSuccess({ sample, audioBuffer }));
  }
}

export function* playPattern({ payload }) {
  const { pattern, audioBuffer, currentBeatPart } = payload;

  yield call(() => {
    if (pattern[1][currentBeatPart] === true && audioBuffer[1]) {
    }
    audioBuffer[1].pop().start(0);
  });
}
