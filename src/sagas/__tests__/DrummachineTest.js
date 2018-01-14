import { put, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
// import { getAsArrayBuffer } from '../../repositories/Drummachine';

import * as sagas from '../Drummachine';
import * as types from '../../actionTypes/Drummachine';
import * as actions from '../../actions/Drummachine';

describe('Drummachine sagas', () => {
  test('Tocks BPM after a tick', () => {
    const action = {
      type: types.BPM_TOCK
    };
    const saga = sagas.bpmTock(action);

    // expect(saga.next(action).value).toEqual(delay(300));
    // expect(saga.next(action).value).toEqual(put(actions.bpmTock()));
    // expect(saga.next().done).toBe(true);
  });
});
