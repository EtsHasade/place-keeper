'use strict';
console.log('books');

var BOOKS_KEY = 'gBooks';

var gNextId;
var gBooks = [];
_creatBooks();


function _creatBooks() {
    var books = (loadFromStorage(BOOKS_KEY) || [])
    gNextId = (books.length > 0)? (Math.max(books.map(function(book) {return book.id}))) : 1;

    if (books.length > 0) {
        gBooks = books;
        return
    }

    for (var i=0; i < 5; i++) {
        books.push(_creatBook());
    }

    gBooks = books;
    _saveBooks();
}


function _creatBook(bookName = 'Book Name', price = '45', detail = bookName+' -  no detail') {
    return {
        id: gNextId++,
        title: bookName,
        img: 'img/book1.svg',
        price: price,
        rate: 0,
        detail: detail
    }
}



function getBooksTodisplay() {
    return gBooks;
}


function _saveBooks() {
    saveToStorage(BOOKS_KEY, gBooks);
}



function  removeBook(bookId) {
    var bookIdx = gBooks.findIndex(function(book) {
        return book.id === bookId
    })
    gBooks.splice(bookIdx,1)
    _saveBooks()
    console.log('remove book:', bookId);
}

function updateBook(bookId, bookName, bookImg, bookPrice, bookDetail, bookRate) {
    var book = getBookById(bookId);
    book.title = bookName;
    book.img = bookImg;;
    book.price = bookPrice;
    book.detail = bookDetail;
    book.rate = bookRate;
    _saveBooks()
    console.log('Update price of book:', bookId, ' - ', bookPrice);
}

function updateRate(bookId, newRate) {
    getBookById(bookId).rate = newRate;
    _saveBooks()

}

function AddBook(newBookName, newPrice, detail) {
    gBooks.push(_creatBook(newBookName, newPrice, detail))
    _saveBooks()
}


function getBookById(bookId) {
    return gBooks.find(function(book) {
        return book.id === bookId
    })
}