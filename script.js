const addBookBtn = document.getElementById('add-book');
const form = document.getElementById('form');
const formContainer = document.getElementById('form-container');
const overlay = document.getElementById('overlay');
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const read = document.getElementById('read-checker');
const submitBtn = document.getElementById('sbt-btn');
const cancelBtn = document.getElementById('cnl-btn');
const books = document.getElementById('books');
let myLibrary = [];
let readAnswer = ''


//when you submit the form do:
form.addEventListener('submit', e => {
    //prevent the form from resumbitting:
    e.preventDefault();

    //check if the user checked the read button
    if(read.checked) {
        readAnswer = "Read"
    }else {
        readAnswer = "Not Read"
    }

     //constructor
     function Book(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    //creation of a Book object
    let newBook = new Book(title.value, author.value, pages.value, readAnswer);

    //Call function to push book into array
    addBookToLibrary(newBook);

    //function to push book and calls function to display the book
    function addBookToLibrary(book) {
        myLibrary.push(book);
        displayBooksOnPage();
    }
   //reset the form
    document.forms[0].reset();
})

function displayBooksOnPage() {

    //remove cards that already have been made
    const removeDivs = document.querySelectorAll('.card')
    for(let i = 0; i < removeDivs.length; i++) {
        removeDivs[i].remove();
    }

    //loop over the library to make cards
    let index = 0;
    //Creates a card for each Book
    myLibrary.forEach(myLibrarys => {
        const card = document.createElement('div');
        card.classList.add('card');
        books.appendChild(card);
        //Creates content for each card
        for(let key in myLibrarys) {
            const para = document.createElement('p');
            para.textContent = (`${myLibrarys[key]}`);
            card.appendChild(para);
        }

         //create remove button
         const removeButton = document.createElement('button');
         removeButton.classList.add('remove-button');
         removeButton.textContent = "Remove"
         console.log(myLibrary);
 
         //link data-attribute of removeButton to the array and card
         removeButton.dataset.linkedArray = index;
         index++;
         card.appendChild(removeButton);

         //event listener to remove button
         removeButton.addEventListener('click', removeBookFromLibrary)

         //fucntion that deletes a card
         function removeBookFromLibrary() {
            let bookToDelete = removeButton.dataset.linkedArray;
            myLibrary.splice(parseInt(bookToDelete), 1);
            card.remove();
            displayBooksOnPage();
         }
    })
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

