let heart = document.querySelector(".fa-heart");
heart.addEventListener("click", function () {
  heart.style.backgroundColor = "green";
  heart.style.borderRadius = "50%";
});
// Music Player
let audioElement = document.getElementById("audio-OneRepublic-Run");
let btnPlayPause = document.getElementById("btn-play");
let playBtn = document.getElementById("playBtn");

playBtn.addEventListener("click", function () {
  if (
    audioElement.paused &&
    playBtn.classList.contains("fa-play-circle")
  ) {
    audioElement.play();
    playBtn.classList.remove("far", "fa-play-circle");
    playBtn.classList.add("far", "fa-pause-circle");
  } else {
    audioElement.pause();
    playBtn.classList.remove("far", "fa-pause-circle");
    playBtn.classList.add("far", "fa-play-circle");
  }
});