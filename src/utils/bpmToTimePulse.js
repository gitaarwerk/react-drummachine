import { bpm } from '../types/propTypes';

window.animationFrameTimerMainBPM;
let now;
let then = Date.now();
let delta;
let calling =0;

const bpmToTime = (bpm) => 60000 / parseInt(bpm,10);

const bpmToTimePulse = (bpm, callback) => {
  const pulseTime = bpmToTime(bpm);


function pulse() {
    cancelAnimationFrame(window.animationFrameTimerMainBPM);
    
    window.animationFrameTimerMainBPM = requestAnimationFrame(pulse);
    
    now = Date.now();
    delta = now - then;
    
    if (delta > pulseTime && calling === 0) {
        calling = 1;
        callback();
        then = now - (delta % pulseTime);
        calling =0;
    }
}

pulse();
};

export default bpmToTimePulse;
