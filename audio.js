const audio = document.getElementById("audio");
const timeDisplay = document.getElementById("time");

function playAudio() {
  audio.play();
}

function pauseAudio() {
  audio.pause();
}

function muteAudio() {
  audio.muted = !audio.muted;
  event.target.textContent = audio.muted ? "Unmute" : "Mute";
}

function setVolume(value) {
  audio.volume = value;
}

// Update current playback time
audio.ontimeupdate = function () {
  timeDisplay.textContent = audio.currentTime.toFixed(1);
};
