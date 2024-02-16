 
 
 function listensAudio(video){
    
    // Listens from the microphone and blow it through speakers can help in reacording
    // const video = document.getElementById("sound1")
    if (navigator.mediaDevices) {
      console.log("getUserMedia supported.");
      navigator.mediaDevices
        .getUserMedia({ audio: true, video: true })
        .then((stream) => {
          video.srcObject = stream;
          video.onloadedmetadata = (e) => {
            video.play();
            video.muted = true;
          };
    
          // Create a MediaStreamAudioSourceNode
          // Feed the HTMLMediaElement into it
          const audioCtx = new AudioContext();
          const source = audioCtx.createMediaStreamSource(stream);
    
          // Create a biquadfilter
          const biquadFilter = audioCtx.createBiquadFilter();
          biquadFilter.type = "lowshelf";
          biquadFilter.frequency.value = 1000;
          // biquadFilter.gain.value = range.value;
    
          // connect the AudioBufferSourceNode to the gainNode
          // and the gainNode to the destination, so we can play the
          // music and adjust the volume using the mouse cursor
          source.connect(biquadFilter);
          biquadFilter.connect(audioCtx.destination);
    
          // Get new mouse pointer coordinates when mouse is moved
          // then set new gain value
    
          // range.oninput = () => {
          //   biquadFilter.gain.value = range.value;
          // };
        })
        .catch((err) => {
          console.log(`The following gUM error occurred: ${err}`);
        });
    } else {
      console.log("getUserMedia not supported on your browser!");
    }
}

export default listensAudio