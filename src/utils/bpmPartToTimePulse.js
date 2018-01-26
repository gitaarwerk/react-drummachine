let currentInterval;
const bpmPartToTime = (bpm, beatPerMeasure) => 60000 / bpm / beatPerMeasure;

const bpmPartToTimePulse = (bpm, beatPerMeasure, callback) => {
  const pulseTime = bpmPartToTime(bpm, beatPerMeasure);

  clearInterval(currentInterval);
  currentInterval = setInterval(() => {
    'callback beat';
    callback();
  }, pulseTime);
};

export default bpmPartToTimePulse;
