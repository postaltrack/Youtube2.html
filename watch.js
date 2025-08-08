let player;
let watchTime = 0;
let timerInterval;

// Load YouTube Iframe API
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '315',
    width: '560',
    videoId: 'FAwbM3iHL0fdmEBb', // Replace with actual video ID
    playerVars: {
      playsinline: 1,
      autoplay: 1,               // Autoplay ON
      mute: 1,                   // Mute ON (necessary for autoplay to work on most browsers)
      rel: 0,
      modestbranding: 1
    },
    events: {
      'onStateChange': onPlayerStateChange
    }
  });
}

// Watch time tracker
function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.PLAYING) {
    if (!timerInterval) {
      timerInterval = setInterval(() => {
        watchTime++;
        document.getElementById("timer").innerText = `Watch Time: ${watchTime} seconds`;
      }, 1000);
    }
  } else if (event.data !== YT.PlayerState.BUFFERING) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}
