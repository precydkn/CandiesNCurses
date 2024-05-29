//==========GAMEPLAY Charms & Treasures
//duplicate the charms & treasures icons for marquee loop
var charmCopy = document.querySelector(".charms-icons").cloneNode(true),
treasureCopy = document.querySelector(".treasures-icons").cloneNode(true);

document.querySelector(".charms-marquee").appendChild(charmCopy);
document.querySelector(".treasures-marquee").appendChild(treasureCopy);

//==========GAMEPLAY Characters & Flashlights
//displaying individual info
document.addEventListener('DOMContentLoaded', function() {
    const cells = document.querySelectorAll('.td'); //characters & flashlights table td
    const infoPanels = document.querySelectorAll('.info-panel'); //characters & flashlights indiv info
    const tables = document.querySelectorAll('.char-table, .light-table'); //characters & flashlights table

    cells.forEach(cell => {
        //hover event on each td (shows individual information)
        cell.addEventListener('mouseenter', function() {
            const tdId = this.dataset.char;
            infoPanels.forEach(panel => {
                if (panel.id === tdId) {
                    panel.style.display = 'block';
                } else {
                    panel.style.display = 'none';
                }
            });

            //dim other cells (to highlight the hovered td)
            cells.forEach(c => {
                if (c !== cell) {
                    c.style.filter = 'brightness(70%)';
                } else {
                    c.style.filter = 'brightness(100%)';
                }
            });
        });
    });

    tables.forEach(table => {
        //event when mouse is not hovering over any td
        table.addEventListener('mouseleave', function() {
            infoPanels.forEach(panel => {
                panel.style.display = 'none';
            });

            //reset cell brightness (when mouse is not hovering on any td, all are 100% bright)
            cells.forEach(c => {
                c.style.filter = 'brightness(100%)';
            });
        });
    });
});

//=========ROOMS
document.addEventListener("DOMContentLoaded", function() {
    const rooms = document.querySelectorAll('.room'); //indiv rooms
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentRoomIndex = 0; //first room

    //function to show the current room and hide others
    function showRoom(index) {
        rooms.forEach((room, i) => {
            if (i === index) {
                room.style.display = 'block';
            } else {
                room.style.display = 'none';
            }
        });
    }

    //show first room initially
    showRoom(currentRoomIndex);

    //event listener for previous button
    prevBtn.addEventListener('click', function() {
        currentRoomIndex = (currentRoomIndex === 0) ? rooms.length - 1 : currentRoomIndex - 1; //subtract 1 from room length to access previous room
        showRoom(currentRoomIndex); //pass current room's index to func to display it
    });

    //event listener for next button
    nextBtn.addEventListener('click', function() {
        currentRoomIndex = (currentRoomIndex === rooms.length - 1) ? 0 : currentRoomIndex + 1; //add 1 to room length to access next room
        showRoom(currentRoomIndex); //pass current room's index to func to display it
    });
});

//BACKGROUND MUSIC
let bgMusic = document.getElementById('music-g'),
audio = new Audio("p-img/gameplay.mp3"), //get audio file
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