import PropTypes from 'prop-types';

const readSample = str => {
  const buf = new ArrayBuffer(str.length * 2); // 2 bytes for each char
  const bufView = new Uint16Array(buf);
  for (var i = 0, strLen = str.length; i < strLen; i++) {
    bufView[i] = str.charCodeAt(i);
  }
  return buf;
};

readSample.propTypes = {
  str: PropTypes.string.isRequired
};

export default readSample;
