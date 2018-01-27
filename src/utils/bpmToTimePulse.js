import { bpm } from '../types/propTypes';

let bpmInterval;
const bpmToTime = bpm => 60000 / parseInt(bpm, 10);
const bpmToTimePulse = (bpm, callback) => {
  const pulseTime = bpmToTime(bpm);

  function go() {
    clearTimeout(bpmInterval);
    callback();
    bpmInterval = setTimeout(go, pulseTime); // callback
  }
  go();
};

bpmToTimePulse.propTypes = {
  bpm
};

export default bpmToTimePulse;
