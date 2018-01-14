import PropTypes from 'prop-types';

export const createEmptyPattern = () => {
  const newPattern = {};
  Array(16)
    .fill('')
    .map((item, index) => {
      newPattern[index] = Array(16).fill(false);
    });
  return newPattern;
};

export const flipSwitch = (patterns, patternId, switchId) => {
  return {
    ...patterns,
    [patternId]: patterns[patternId].map((item, index) => {
      return switchId === index ? !item : item;
    })
  };
};

flipSwitch.propTypes = {
  patterns: PropTypes.objectOf(PropTypes.Array).isRequired,
  patternId: PropTypes.number.isRequired,
  switchId: PropTypes.number.isRequired
};
