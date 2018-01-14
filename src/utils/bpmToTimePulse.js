import { bpm } from '../types/propTypes';
let bpmInterval;
const bpmToTime = bpm => 60000 / bpm;

const bpmToTimePulse = (bpm, callback) => {
  const pulseTime = bpmToTime(bpm);

  clearInterval(bpmInterval);
  bpmInterval = setInterval(() => {
    console.log('callback measure');
    callback();
  }, pulseTime);
};

bpmToTimePulse.propTypes = {
  bpm
};

export default bpmToTimePulse;
