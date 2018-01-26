import { put, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { getAsArrayBuffer } from '../repositories/Drummachine';

import * as actions from '../actions/Drummachine';
import createSample from '../utils/createSample';

export function* bpmTock() {
  yield delay(300);
  yield put(actions.bpmTock());
}

export function* bpmPartTock() {
  yield delay(300);
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

export function* playSounds({ payload }) {
  if (payload.length) {
    const samples = payload.map(item => {
      console.log(item.sampleUrl);
    });
    // const sample = createSample
  }
}
