import { bpm } from '../types/propTypes';
let bpmInterval;
let i = 0;

const bpmToTime = bpm => 60000 / parseInt(bpm, 10) * 4;

const bpmToTimePulse = (bpm, callback) => {
  const pulseTime = bpmToTime(bpm);

  function go() {
    clearTimeout(bpmInterval);
    i++;
    callback();
    bpmInterval = setTimeout(go, pulseTime); // callback
  }
  go();
};

bpmToTimePulse.propTypes = {
  bpm
};

export default bpmToTimePulse;
