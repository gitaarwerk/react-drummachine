import { takeEvery } from 'redux-saga/effects';

import * as types from './actionTypes/Drummachine';
import * as sagas from './sagas/Drummachine';

export default function* rootSaga() {
  yield takeEvery(types.BPM_TICK, () => {
    console.log('ticky');
    return sagas.bpmTock;
  });
  yield takeEvery(types.BPM_PART_TICK, sagas.bpmPartTock);
  yield takeEvery(types.PLAY_PATTERN, sagas.playPattern);
  yield takeEvery(types.LOAD_SAMPLE, sagas.loadSample);
}
