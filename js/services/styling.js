'use strict';
console.log('styling js loaded');

const STYLE_KEY = 'gColorGlobal';
const gDefaultStyle = {
    GLOBAL_TEXT_COLOR: '#ffffff',      // body color for text
    LABELS_COLOR_1: '#0e3453', //all element content "data-color="LABELS_COLOR_1 (header, footer...)"
    MAIN_COLOR_1: '#0b4b80'  //all element content "data-color="LABELS_COLOR_1 (main)"
}

var gColorGlobal = (loadStyle() || gDefaultStyle);



var onChooseColors = (ev) => {
    ev.preventDefault()
    console.log('Choose colors - text');

    gColorGlobal.LABELS_COLOR_1 = document.querySelector('#bgLabelsColor').value;
    gColorGlobal.MAIN_COLOR_1 = document.querySelector('#bgMainColor').value;
    gColorGlobal.GLOBAL_TEXT_COLOR = document.querySelector('#textColor').value;
    //todo: save to storage

    saveStyle()
    asingnStyle()

}


var asingnStyle = () => {
    let els = document.querySelectorAll('[data-color]');
    els.forEach(el => el.style.backgroundColor = gColorGlobal[el.dataset.color]);

    document.body.style.color = gColorGlobal.GLOBAL_TEXT_COLOR;


    document.querySelector('#bgLabelsColor').value = gColorGlobal.LABELS_COLOR_1;
    document.querySelector('#bgMainColor').value = gColorGlobal.MAIN_COLOR_1;
    document.querySelector('#textColor').value = gColorGlobal.GLOBAL_TEXT_COLOR;
}


var restStyle = () => {
    gColorGlobal = gDefaultStyle;
    saveStyle()
    console.log('saved def');
    
    asingnStyle()
}


function saveStyle() {
    saveToStorage(STYLE_KEY, gColorGlobal);
}


function loadStyle() {
    return loadFromStorage(STYLE_KEY);
}