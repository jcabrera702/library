const myLibrary =[];

function Book(title, author, pages, read){
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBook (title, author, pages, read) {
    const newBook = new Book (title, author, pages, read);
    myLibrary.push(newBook);
    return newBook;
}

// const myBook = addBook("My journey","Justin","1", "true");
// {
//     "id": "af561931-9593-4775-b25a-bab309e3b91b",
//     "title": "My journey",
//     "author": "Justin",
//     "pages": "1",
//     "read": "true"
// }

// Create a browse function to locate the ID
function browse (){
    // User input stuff here

    myLibrary.includes("My journey")
}



// Select the necessary elements once outside the function
const addBtn = document.querySelector('.add'); 
const newBookForm = document.querySelector('.new-book-form'); 
const showForm = document.querySelector('.show-form');

// Toggles form to display none
function toggleFormDisplay() {
   newBookForm.classList.toggle('hide');
  
}

// display none toggle attached to addBtn click
addBtn.addEventListener('click', toggleFormDisplay);



// access form and actions upon submit:
const form = document.querySelector('.new-book-form'); 
form.addEventListener('submit', (event) =>{
    event.preventDefault();
    
    const title = event.target.title.value;
    const author = event.target.author.value;
    const pages = event.target.pages.value;
    const read = event.target.read.checked;
// Assigned a variable to access the new book
    const newBook = addBook(title, author,pages, read);
    newBookId = newBook.id;
    form.reset();
    // Display the new book
    form.remove();
    const display = document.querySelector('.display');
    display.style = 'border: 2px solid white';
    const createIdDisplay = document.createElement('div');
    createIdDisplay.textContent = `ID: ${newBookId}`
    const createTitleDisplay = document.createElement('div');
    createTitleDisplay.textContent = `Title: ${title}`;
    const createAuthorDisplay = document.createElement('div');
    createAuthorDisplay.textContent = `Author: ${author}`;
    const createPagesDisplay = document.createElement('div');
    createPagesDisplay.textContent = `Pages Total: ${pages}`;
    const readDisplay = document.createElement('div');
    if(read === true){
        readDisplay.textContent = 'This book has been read'
    } else {
        readDisplay.textContent = 'This book has not been read'
    }
    const createSubBtn = document.createElement('button');
    createSubBtn.textContent = 'CLose';
    createSubBtn.setAttribute('class', 'confirm');
    display.append(createIdDisplay, createTitleDisplay, createAuthorDisplay, createPagesDisplay, readDisplay, createSubBtn);
// Removes the display container when clicking the confirm add
    createSubBtn.addEventListener('click', (event) =>{
    display.remove();
});

});




