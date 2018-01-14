export const createEmptyPattern = () => {
  const newPattern = {};
  Array(16)
    .fill('')
    .map((item, index) => {
      newPattern[index] = Array(16).fill(false);
    });
  return newPattern;
};
