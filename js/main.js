'use strict';
console.log('main js loaded');

const USER_NAME_KEY = 'USER_NAME';
const gDefaultUserName = 'Your Name';
var gUserName = '';


function onInit() {
    gUserName = (loadUserName() || gDefaultUserName);
    asingnStyle()
    setUserName()

}

function onSaveUserName(el) {
    saveToStorage(USER_NAME_KEY, el.innerText);
}

function setUserName() {
    document.querySelector('.user-name h2').innerText = gUserName;
}

function loadUserName() {
    return loadFromStorage(USER_NAME_KEY);
}