
let heart=document.querySelector(".bi-heart")
heart.addEventListener("click",function(){
    heart.style.backgroundColor="red"
    
})
let btnPlay=document.getElementById("btn-play")
let audioElement = document.getElementById("audio-OneRepublic-Run");
btnPlay.addEventListener("click",function(){
    if (audioElement.paused) {
        audioElement.play();
       btnPlay.innerText="PAUSE"
      } else {
        audioElement.pause();
        btnPlay.innerText="PLAY"
      }
    
})

