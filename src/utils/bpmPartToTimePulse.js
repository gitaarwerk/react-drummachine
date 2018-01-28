
let now;
let then = Date.now();
let delta;
window.animationFrameTimer;
let calling =0;

const bpmPartToTime = (bpm, beatPerMeasure) => 60000 / parseInt(bpm,10) / beatPerMeasure;

const bpmPartToTimePulse = (bpm, beatPerMeasure, callback) => {
  const pulseTime = bpmPartToTime(bpm, beatPerMeasure);


function pulse() {
    cancelAnimationFrame(window.animationFrameTimer);
    
    window.animationFrameTimer = requestAnimationFrame(pulse);
    
    now = Date.now();
    delta = now - then;
    
    if (delta > pulseTime && calling === 0) {
        calling = 1;
        callback();
                then = now - (delta % pulseTime);
        calling =0;
        // ... Code for Drawing the Frame ...
    }
}

pulse();
};

export default bpmPartToTimePulse;
