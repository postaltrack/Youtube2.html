let player;
let watchTime = 0;
let timerInterval;

// Load YouTube player
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '315',
    width: '560',
    videoId: 'FAwbM3iHL0fdmEBb', // YOUR VIDEO ID HERE
    playerVars: { 'playsinline': 1 },
    events: {
      'onStateChange': onPlayerStateChange
    }
  });
}

// Handle play/pause events
function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.PLAYING) {
    if (!timerInterval) {
      timerInterval = setInterval(() => {
        watchTime++;
        document.getElementById("timer").innerText = `Watch Time: ${watchTime} seconds`;
      }, 1000);
    }
  } else {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}
