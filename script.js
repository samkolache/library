const addBookBtn = document.getElementById('add-book');
const form = document.getElementById('form');
const formContainer = document.getElementById('form-container');
const overlay = document.getElementById('overlay');
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const submitBtn = document.getElementById('sbt-btn');
const cancelBtn = document.getElementById('cnl-btn');




//open and Close forms
addBookBtn.addEventListener('click', e => {
    formContainer.classList.add('active');
    overlay.classList.add('active');
})

cancelBtn.addEventListener('click', e => {
    formContainer.classList.remove('active');
    overlay.classList.remove('active');
})

//form validation
form.addEventListener('submit', e => {
    e.preventDefault();
    formValidation();
})

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

    if(titleValue === "") {
        setError(title);
    }else {
        setSuccess(title)
    }

    if(authorValue === "") {
        setError(author);
    }else {
        setSuccess(author)
    }

    if(pagesValue === "") {
        setError(pages);
    }else {
        setSuccess(pages)
    }

}


//book storage and creation

let myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}


function addBookToLibrary() {
    //put books into array    
}

