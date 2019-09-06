// const videoTag = document.getElementById('videoTag');
// const mediaSource = new MediaSource();
// const url = URL.createObjectURL(mediaSource);
// videoTag.src = URL.createObjectURL(mediaSource);

// const videoSourceBuffer = myMediaSource
//   .addSourceBuffer('video/mp4; codecs="avc1.64001e"')

const startup = (timeDelay) => {
  setTimeout(() => {
    const videoTag = document.getElementById('videoTag');
    if (Hls.isSupported()) {
      let hls = new Hls();
      // console.log(hls)
      hls.attachMedia(videoTag);
      hls.on(Hls.Events.MEDIA_ATTACHED, function () {
        console.log("video and hls.js are now bound together !");
        //Add hls.loadSource here
        hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
          console.log(`manifest loaded, found ${data.levels.length} quality level`);
          if (videoTag != undefined) {
            videoTag.play();
          }
        });
      });
    }
  }, timeDelay);
}



export default startup;