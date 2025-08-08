let player;
let watchTime = 0;
let timerInterval = null;

// YouTube Player API callback
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '315',
    width: '560',
    videoId: 'FAwbM3iHL0fdmEBb', // Replace with your actual video ID
    playerVars: { 'playsinline': 1 },
    events: {
      'onStateChange': onPlayerStateChange
    }
  });
}

// Handle YouTube player state changes
function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.PLAYING) {
    startWatchTimer();
  } else if (
    event.data === YT.PlayerState.PAUSED ||
    event.data === YT.PlayerState.ENDED ||
    event.data === YT.PlayerState.BUFFERING
  ) {
    stopWatchTimer();
  }
}

// Start counting time
function startWatchTimer() {
  if (!timerInterval) {
    timerInterval = setInterval(() => {
      watchTime++;
      document.getElementById("timer").innerText = `Watch Time: ${watchTime} seconds`;
    }, 1000);
  }
}

// Stop counting time
function stopWatchTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}
