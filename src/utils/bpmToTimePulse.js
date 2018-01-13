import { bpm } from '../types/propTypes';
let currentInterval;
const bpmToTime = bpm => 60000 / bpm;

const bpmToTimePulse = (bpm, callback) => {
  const pulseTime = bpmToTime(bpm);

  clearInterval(currentInterval);
  currentInterval = setInterval(function() {
    callback();
  }, pulseTime);
};

bpmToTimePulse.propTypes = {
  bpm
};

export default bpmToTimePulse;
