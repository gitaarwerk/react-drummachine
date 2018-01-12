import PropTypes from 'prop-types';

import { bpm } from '../types/propTypes';

let currentInterval;
const bpmPartToTime = (bpm, beatPerMeasure) => 60000 / bpm / beatPerMeasure;

const bpmPartToTimePulse = (bpm, beatPerMeasure, callback) => {
  const pulseTime = bpmPartToTime(bpm, beatPerMeasure);

  clearInterval(currentInterval);
  currentInterval = setInterval(function() {
    console.log('bpm-part-tick');
    callback();
  }, pulseTime);
};

bpmPartToTimePulse.propTypes = {
  bpm: bpm.isRequired,
  beatPerMeasure: bpm.isRequired,
  callback: PropTypes.func.isRequired
};

export default bpmPartToTimePulse;
