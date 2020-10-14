'use strict';


function closeParent(elParent) {
    elParent.hidden = 'true';
}


function getRanomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


function getRandomColor(hight = 16) {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * hight)];
    }
    return color;
}



function setRandomBG() {
    let els = document.querySelectorAll('*');
    els.forEach(el => el.style.backgroundColor = getRandomColor())
}