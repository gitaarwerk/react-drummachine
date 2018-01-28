function BufferLoader(context, urlList, callback) {
    this.context = context;
    this.urlList = urlList;
    this.onload = callback;
    this.bufferList = [];
    this.loadCount = 0;
  }
  
  BufferLoader.prototype.loadBuffer = function(url, index)  {
    const request = new XMLHttpRequest();
    const loader = this;

    request.open("GET", url, true);
    request.responseType = "arraybuffer";
  
    request.onload = function()  {
      loader.context.decodeAudioData(
        request.response,
        (buffer) => {
          if (!buffer) {
            console.error('error decoding file data: ' + url);
            return;
          }
          loader.bufferList[index] = buffer;
          if (++loader.loadCount === loader.urlList.length)
            loader.onload(loader.bufferList);
        },
        (error) => {
          console.error('decodeAudioData error', error);
        }
      );
    }
  
    request.onerror = () => {
      console.error('BufferLoader: XHR error');
    }
  
    request.send();
  }
  
  BufferLoader.prototype.load = function() {
    for (let i = 0; i < this.urlList.length; ++i)
    this.loadBuffer(this.urlList[i], i);
  }
  
 BufferLoader.immediate = 1;

  export default BufferLoader;