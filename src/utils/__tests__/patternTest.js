import * as patternUtils from '../pattern';
import * as mocks from '../../__mocks__/Drummachine';

describe('Patterns', () => {
  test('resets all patterns', () => {
    const emptyPattern = patternUtils.createEmptyPattern();

    expect(emptyPattern).toEqual(mocks.resetPatternMock);
  });

  test('flip switch on within pattern', () => {
    const emptyPattern = mocks.resetPatternMock;
    const expected = mocks.flipSwitchMock;
    const newPattern = patternUtils.flipSwitch(emptyPattern, 2, 2);

    expect(expected).toEqual(newPattern);
  });
});
