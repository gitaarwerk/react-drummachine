import * as types from '../../actionTypes/Drummachine';
import reducer from '../Drummachine';

describe('Drummachine', () => {
  test('sets bpm', () => {
    const action = {
      type: types.SET_BPM,
      payload: 120
    };

    const state = {
      bpm: 20
    };

    const actual = reducer(state, action);

    expect(actual).toEqual({
      bpm: 120
    });
  });

  test('ticks bpm', () => {
    const action = {
      type: types.BPM_TICK,
      payload: 120
    };

    const state = {
      bpmLightState: false,
      currentBeat: 0
    };

    const actual = reducer(state, action);

    expect(actual).toEqual({
      bpmLightState: true,
      currentBeat: 1
    });
  });
});
