// BACKGROUND MUSIC
let bgMusic = document.getElementById('music-a'),
audio = new Audio("p-img/about.mp3"), //get audio file
musicIsPlaying = false, //music is not playing on website load
bgMusicImage = bgMusic.querySelector('img'); //get img element inside the button

//loop music
audio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);

// function to play/stop music
function toggleMusic() {
    if (musicIsPlaying) {
        audio.pause();
        bgMusicImage.src = "../img/home/button music muted.png"
    } else {
        audio.play();
        bgMusicImage.src = "../img/home/button music playing.png"
    }
    musicIsPlaying = !musicIsPlaying; //toggle the music state
}

bgMusic.addEventListener("click", toggleMusic); //calls toggleMusic() when button is clicked, playing or pausing the music