const addBookBtn = document.getElementById('add-book');
const form = document.getElementById('form');
const formContainer = document.getElementById('form-container');
const overlay = document.getElementById('overlay');
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const submitBtn = document.getElementById('sbt-btn');
const cancelBtn = document.getElementById('cnl-btn');
const books = document.getElementById('books');
let myLibrary = [];


//form validation and object creation
form.addEventListener('submit', e => {
    e.preventDefault();
    formValidation();

    //creation of a book object
    let newBook = new Book(title.value, author.value, pages.value);
    addBookToLibrary(newBook);

    //to add books to library
    function addBookToLibrary(book) {
        myLibrary.push(book);
        newBook = {};
    }
    //constructor
    function Book(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
    document.forms[0].reset();
    console.log(myLibrary)
    displayBooksOnPage();
})

function displayBooksOnPage() {

    //loop over the library to make cards
    myLibrary.forEach(myLibrary => {
        const card = document.createElement('div');
        card.classList.add('card');
        books.appendChild(card);
        for(let key in myLibrary) {
            console.log(`${key}: ${myLibrary[key]}`)
            const para = document.createElement('p');
            para.textContent = (`${key}: ${myLibrary[key]}`);
            card.appendChild(para);
        }

    })
}




function setError(element) {
    element.classList.add('error');
    element.classList.remove('success');
}

function setSuccess(element) {
    element.classList.add('success');
    element.classList.remove('error');
}

function formValidation() {
    const titleValue = title.value.trim();
    const authorValue = author.value.trim();
    const pagesValue = pages.value.trim();

    if(titleValue === '') {
        setError(title);
    }else {
        setSuccess(title)
    }

    if(authorValue === '') {
        setError(author);
    }else {
        setSuccess(author)
    }

    if(pagesValue === '') {
        setError(pages);
    }else {
        setSuccess(pages)
    }

}

//open and Close forms
addBookBtn.addEventListener('click', e => {
    formContainer.classList.add('active');
    overlay.classList.add('active');
})

cancelBtn.addEventListener('click', e => {
    formContainer.classList.remove('active');
    overlay.classList.remove('active');
})

