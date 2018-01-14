const emptyArrayOf16 = Array(16).fill(false);

export const resetPatternMock = {
  0: emptyArrayOf16,
  1: emptyArrayOf16,
  2: emptyArrayOf16,
  3: emptyArrayOf16,
  4: emptyArrayOf16,
  5: emptyArrayOf16,
  6: emptyArrayOf16,
  7: emptyArrayOf16,
  8: emptyArrayOf16,
  9: emptyArrayOf16,
  10: emptyArrayOf16,
  11: emptyArrayOf16,
  12: emptyArrayOf16,
  13: emptyArrayOf16,
  14: emptyArrayOf16,
  15: emptyArrayOf16
};

export const flipSwitchMock = {
  ...resetPatternMock,
  2: emptyArrayOf16.map((item, index) => {
    return index === 2 ? true : false;
  })
};

export const patternMock = {
  0: Array(16).fill(true),
  1: Array(16).fill(false),
  2: Array(16).fill(true),
  3: Array(16).fill(true),
  4: Array(16).fill(false),
  5: Array(16).fill(false),
  6: Array(16).fill(false),
  7: Array(16).fill(true),
  8: Array(16).fill(false),
  9: Array(16).fill(false),
  10: Array(16).fill(false),
  11: Array(16).fill(false),
  12: Array(16).fill(true),
  13: Array(16).fill(false),
  14: Array(16).fill(false),
  15: Array(16).fill(false)
};
