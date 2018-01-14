import * as types from '../../actionTypes/Drummachine';
import reducer from '../Drummachine';
import * as mocks from '../../__mocks__/Drummachine';

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
      type: types.BPM_TICK
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

  test('tocks bpm', () => {
    const action = {
      type: types.BPM_TOCK
    };

    const state = {
      bpmLightState: true
    };

    const actual = reducer(state, action);

    expect(actual).toEqual({
      bpmLightState: false
    });
  });

  test('ticks bpm part', () => {
    const action = {
      type: types.BPM_PART_TICK
    };

    const state = {
      bpmPartLightState: false,
      currentBeatPart: 0
    };

    const actual = reducer(state, action);

    expect(actual).toEqual({
      bpmPartLightState: true,
      currentBeatPart: 1
    });
  });

  test('ticks bpm part snaps back to zero after hitting its 16th note', () => {
    const action = {
      type: types.BPM_PART_TICK
    };

    const state = {
      bpmPartLightState: false,
      currentBeatPart: 16
    };

    const actual = reducer(state, action);

    expect(actual).toEqual({
      bpmPartLightState: true,
      currentBeatPart: 0
    });
  });

  test('tocks bpm part', () => {
    const action = {
      type: types.BPM_PART_TOCK
    };

    const state = {
      bpmPartLightState: true
    };

    const actual = reducer(state, action);

    expect(actual).toEqual({
      bpmPartLightState: false
    });
  });

  test('all samples are loaded', () => {
    const action = {
      type: types.SAMPLES_ARE_LOADED
    };

    const state = {
      samplesLoaded: false
    };

    const actual = reducer(state, action);

    expect(actual).toEqual({
      samplesLoaded: true
    });
  });

  test('select sample pattern', () => {
    const action = {
      type: types.SELECT_SAMPLE_PATTERN,
      payload: 13
    };

    const state = {
      selectedPattern: 0
    };

    const actual = reducer(state, action);

    expect(actual).toEqual({
      selectedPattern: 13
    });
  });

  test('select sample pattern', () => {
    const action = {
      type: types.RESET_PATTERN
    };

    const state = {
      pattern: mocks.patternMock
    };

    const actual = reducer(state, action);

    expect(actual).toEqual({
      pattern: mocks.resetPatternMock
    });
  });

  test('flip pattern switch', () => {
    const action = {
      type: types.FLIP_PATTERN_SWITCH,
      payload: { patternId: 2, switchId: 2 }
    };

    const state = {
      pattern: mocks.resetPatternMock
    };

    const actual = reducer(state, action);

    expect(actual).toEqual({ pattern: mocks.flipSwitchMock });
  });
});
