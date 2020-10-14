'use strict';
console.log('i18n');


var gTrans = {
    'header-title': {
        en: 'Book shop',
        es: 'Book shop',
        he: 'חנות ספרים'
    },
    id: {
        en:'ID',
        es:'ID',
        he:'מק"ט'
    },
    title: {
        en:'Title',
        es:'Title',
        he:'כותר'
    },
    rate: {
        en:'Rate',
        es:'Rate',
        he:'דירוג'
    },
    price: {
        en:'Price',
        he:'מחיר'
    },
    coffeeRight: {
        en:'coffeeRight ☕',
        he:'כל הזכוכיות שבורות ⏱',
    },
    update: {
        en: 'Update',
        es: '',
        he: 'עדכן'
    },
    'update-book': {
        en: 'Update book',
        es: '',
        he: 'עדכן ספר'
    },
    'add-new-book': {
        en: 'Add new book',
        es: '',
        he: 'הוספת ספר חדש'
    },
    'book-name': {
        en: 'Book name',
        es: '',
        he: 'שם הספר'
    },
    'book-price': {
        en: 'Book price',
        es: '',
        he: 'מחיר הספר'
    },
    'book-detail': {
        en: 'Book detail',
        es: '',
        he: 'פרטי הספר'
    },
    'This book is...': {
        en: 'This book is...',
        es: '',
        he: 'ספר זה הינו...'
    },
    create: {
        en: 'Create',
        es: '',
        he: 'צור'
    },
    'img-url-msg': {
        en: 'for image, cheng the PNG imgae in folder "img" for this book',
        es: '',
        he: 'לשינוי התמונה, שנה את קובץ ה-png של התמונה בתיקיית "img" ששמה כשם הספר'
    },
    'delete-book': {
        en: 'Delete book',
        es: '',
        he: 'מחיקת הספר'
    },
    'delete': {
        en: 'Delete',
        es: '',
        he: 'מחק'
    },
    'are you sure?': {
        en: 'are you sure?',
        es: '',
        he: 'אתה בטוח?'
    },
    'cancel': {
        en: 'cancel',
        es: '',
        he: 'סגור'
    },
    read:{
        en: 'read',
        es: '',
        he: 'פרטים'
    },
    currency: {
        en: '$',
        es: '',
        he: '₪'
    }

}


var gCurrLang = 'he';
const gRtlLangs = ['he', 'ar']


function getTrans(transKey) {
    const transLangsMap = gTrans[transKey];
    if (!transLangsMap) return 'UnKnown';

    const transStr = transLangsMap[gCurrLang];
    if (!transStr) return transLangsMap['en'];

    return transStr;
}

function transAll() {
    if (gCurrLang === 'he') gCurrencyType = '₪';
    else gCurrencyType = '$';

    var els = document.querySelectorAll('[data-trans]');
    els.forEach(function(el){
        const transStr = getTrans(el.dataset.trans)
        if (el.placeholder) el.placeholder = transStr;
        else el.innerText = transStr;
    })

    if (gRtlLangs.includes(gCurrLang)) document.querySelector('body').style.direction = 'rtl';
    else document.querySelector('body').style.direction = 'ltr';

}