const image = document.getElementById("cover");
const title = document.getElementById("music-title");
const artist = document.getElementById("music-artist");
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");
const progress = document.getElementById("progress");
const playerProgress = document.getElementById("player-progress");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const playBtn = document.getElementById("play");

const music = new Audio();

const songs = [
  {
    path: "music/track1.mp3",
    displayName: "Once in a Lifetime",
    artist: "Stick Figure",
  },
  {
    path: "music/track2.mp3",
    displayName: "World on Fire",
    artist: "Stick Figure",
  },
  {
    path: "music/track3.mp3",
    displayName: "Angels of Love",
    artist: "Stick Figure",
  },
  {
    path: "music/track4.mp3",
    displayName: "Shine",
    artist: "Stick Figure",
  },
  {
    path: "music/track5.mp3",
    displayName: "All for You",
    artist: "Stick Figure",
  },
  {
    path: "music/track6.mp3",
    displayName: "Above the Storm",
    artist: "Stick Figure",
  },
];

let musicIndex = 0;
let isPlaying = false;

function togglePLay() {
  if (isPlaying) {
    pauseMusic();
  } else {
    playMusic();
  }
}

function playMusic() {
  isPlaying = true;
  //changing the play button icon
  playBtn.classList.replace("fa-play", "fa-pause");
  //set button hover title
  playBtn.setAttribute("title", "Pause");
  music.play();
}

function pauseMusic() {
  isPlaying = false;
  //changing the pause button icon
  playBtn.classList.replace("fa-pause", "fa-play");
  //set button hover title
  playBtn.setAttribute("title", "Play");
  music.pause();
}

function loadMusic(song) {
  music.src = song.path;
  title.textContent = song.displayName;
  artist.textContent = song.artist;
}

function changeMusic(direction) {
  musicIndex = (musicIndex + direction + songs.length) % songs.length;
  loadMusic(songs[musicIndex]);
  playMusic();
}

function updateProgressBar() {
  const { duration, currentTime } = music;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;

  const formatTime = (time) => String(Math.floor(time)).padStart(2, "0");
  durationEl.textContent = `${formatTime(duration / 60)}:${formatTime(
    duration % 60
  )}`;
  currentTimeEl.textContent = `${formatTime(currentTime / 60)}:${formatTime(
    currentTime % 60
  )}`;
}

function setProgressBar(e) {
  const width = playerProgress.clientWidth;
  const clickX = e.offsetX;
  music.currentTime = (clickX / width) * music.duration;
}

playBtn.addEventListener("click", togglePLay);
prevBtn.addEventListener("click", () => changeMusic(-1));
nextBtn.addEventListener("click", () => changeMusic(1));
music.addEventListener("ended", () => changeMusic(1));
music.addEventListener("timeupdate", updateProgressBar);
playerProgress.addEventListener("click", setProgressBar);

loadMusic(songs[musicIndex]);
