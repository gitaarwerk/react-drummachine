const createSample = async (bufferedSample, audioContext) => {
  const vessel = audioContext.createBufferSource();
  const sample = await bufferedSample;
  const audioBuffer = await audioContext.decodeAudioData(sample);
  vessel.buffer = audioBuffer;
  vessel.connect(audioContext.destination);
  return await vessel;
};

export default createSample;
