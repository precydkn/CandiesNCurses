/*duplicate the charms & treasures icons for marquee loop*/
var charmCopy = document.querySelector(".charms-icons").cloneNode(true),
treasureCopy = document.querySelector(".treasures-icons").cloneNode(true);

document.querySelector(".charms-marquee").appendChild(charmCopy);
document.querySelector(".treasures-marquee").appendChild(treasureCopy);

/*displaying character info
document.addEventListener('DOMContentLoaded', function() {
    const charTableCells = document.querySelectorAll('.char-table table td');
    const charFocusElements = document.querySelectorAll('.char-info');

    charTableCells.forEach(cell => {
        cell.addEventListener('mouseenter', function() {
            const characterClass = this.querySelector('img').className;
            showCharacterFocus(characterClass);
        });

        cell.addEventListener('mouseleave', function() {
            hideAllCharacterFocus();
        });
    });

    function showCharacterFocus(characterClass) {
        charFocusElements.forEach(element => {
            if (element.id === characterClass) {
                element.style.display = 'block';
            } else {
                element.style.display = 'none';
            }
        });
    }

    function hideAllCharacterFocus() {
        charFocusElements.forEach(element => {
            element.style.display = 'none';
        });
    }
});*/
document.addEventListener('DOMContentLoaded', function() {
    const charCells = document.querySelectorAll('.char-cell');
    const charFocuses = document.querySelectorAll('.char-info');
    const charTable = document.querySelector('.char-table');

    charCells.forEach(cell => {
        cell.addEventListener('mouseenter', function() {
            const charId = this.dataset.char;
            charFocuses.forEach(focus => {
                if (focus.id === charId) {
                    focus.style.display = 'block';
                    focus.style.filter = 'brightness(100%)';
                    charTable.style.filter = 'brightness(70%)';
                } else {
                    focus.style.display = 'none';
                }
            });
        });
        cell.addEventListener('mouseleave', function() {
            charFocuses.forEach(focus => {
                focus.style.display = 'none';
                charTable.style.filter = 'brightness(100%)';
            });
        })
    });
});

/*
circular-slider == slideshow
container == carousel
text == slide
slider == controls
menu == room-name
img == pointer-light

menuItems == roomName


const slideshow = document.querySelector(".slideshow"),
image = document.querySelector(".controls .pointer-light"),
indicator = document.querySelector(".indicator"),
roomNames = document.querySelectorAll(".room-name img"),
descriptions = document.querySelectorAll(".slide");

const rotationValues = [-70, -50, -25, 0, 25, 50, 70],
colors = ["red", "orange", "yellow", "green", "blue", "violet", "pink"],
images = ["1 Shudder Shade Study", "2 Ember Cellar", "3 Undead Library", "4 Dinette of Doom", "5 Botanical Ballroom", "6 Halls of Sorrow", "6 Halls of Sorrow"]

let itemIndex = 3; //current slide

// func to rotate slider
function rotate(rotationValue) {
    image.style.transform = `rotate(${rotationValue}deg)`; //rotates indicator using the values from the rotationValues when this func is called
    indicator.style.transform = `translate(-50%, -50%) rotate(${rotationValue}deg)`;
}

//loop through each room
roomNames.forEach((roomName, i) => {
    roomName.addEventListener("click", () => {
        image.style.backgroundImage = "url('p-img/rooms/" + images[i] + ".png')";
        slideshow.style.background = colors[i]; //bg color changes per room

        if(i > itemIndex) {
            rotate(rotationValues[itemIndex] - 10);
        } else if (i < itemIndex) {
            rotate(rotationValues[itemIndex] + 10);
        } else {
            return "";
        }

        //wait for the counter-rotation to finish
        setTimeout(() => {
            rotate(rotationValues[i]); //rotate using rotationValues
        }, 300);

        //hide all descriptions
        descriptions.forEach(text => {
            text.style.display = "none";
        });
        //show only corresponding description
        descriptions[i].style.display = "block";
        itemIndex = i;
        });
});
*/