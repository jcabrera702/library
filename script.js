const myLibrary = [
 { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', pages: 180, read: true },
    { id: 2, title: '1984', author: 'George Orwell', pages: 328, read: false },
    { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee', pages: 281, read: true }
];

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
function clearCat() {
    // We check if cat exists to avoid errors
    const cat = document.querySelector('.catalogue');
    
    if (myLibrary.length === 0) {
        // Hide the container
        cat.classList.add('hide'); 
        
        // Safely remove the button if it exists
        if (typeof sideNext !== 'undefined' && sideNext) {
            sideNext.remove();
            sideNext = null; 
        }
        
        console.log("Library empty: Catalogue hidden and Next button removed.");
    }
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
    form.classList.toggle('hide');
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
    // Button is to close the display when adding new books↓
    const createSubBtn = document.createElement('button');
    createSubBtn.textContent = 'CLose';
    createSubBtn.setAttribute('class', 'confirm');
    display.append(createIdDisplay, createTitleDisplay, createAuthorDisplay, createPagesDisplay, readDisplay, createSubBtn);
// Removes the display container when clicking the confirm add
    createSubBtn.addEventListener('click', (event) =>{
    display.remove();
});

});

  let currentIndex = 0;
    function renderBook() {
        const cat = document.querySelector('.catalogue');
    const book = myLibrary[currentIndex];
    
    
    // 1. Clear the container first (clears old content before adding new)
    cat.innerHTML = ''; 

    // 2. Create the elements and set their content using textContent
    // Used createTextNode as a safety measure in security
    
    // Title
    const title = document.createElement('h3');
    // Using textContent is the key to preventing XSS
    title.textContent = book.title; 
    
    // ID
    const id = document.createElement('p');
    // You can safely combine static HTML with dynamically set textContent
    id.innerHTML = `<strong>ID:</strong> `; 
    const idValue = document.createTextNode(book.id);
    id.appendChild(idValue);

    // Author
    const author = document.createElement('p');
    author.innerHTML = `<strong>Author:</strong> `;
    const authorValue = document.createTextNode(book.author);
    author.appendChild(authorValue);

    // Pages
    const pages = document.createElement('p');
    pages.innerHTML = `<strong>Pages:</strong> `;
    const pagesValue = document.createTextNode(book.pages);
    pages.appendChild(pagesValue);

    // Read Status
    const readStatus = document.createElement('p');
    readStatus.innerHTML = `<strong>Read Status:</strong> `;
    const statusText = book.read ? 'Completed' : 'Not Read Yet';
    const readStatusValue = document.createTextNode(statusText);
    readStatus.appendChild(readStatusValue);

    const btnDiv = document.createElement('div');

    // 3. Append all new elements to the container, used separate container to make it visually appealing
    cat.appendChild(title);
    cat.appendChild(id);
    cat.appendChild(author);
    cat.appendChild(pages);
    cat.appendChild(readStatus);
    cat.appendChild(btnDiv);

// delete button ↓
    const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.setAttribute('class', 'delete');
            btnDiv.append(deleteBtn);

            deleteBtn.addEventListener('click', (event)=>{
                myLibrary.splice(currentIndex, 1);
                if(myLibrary.length > 0){
                    currentIndex = 0;
                } else {
                    clearCat();
                }
                renderBook();
                
            })
// read update button
const readUpdate = document.createElement('button');
const readButtonText = book.read ? 'read' : 'unread';
readUpdate.textContent = readButtonText;
btnDiv.append(readUpdate);

readUpdate.addEventListener('click', (event) =>{
    book.read = !book.read
    readUpdate.textContent = book.read ? "read" : "unread";
    console.log(`Book status changed to: ${book.read}`);
});


    console.log(`Currently displaying index: ${currentIndex}`);
}

// Catalogue button actions↓
const catBtn = document.querySelector('.cat');
catBtn.addEventListener('click',(event) =>{
    const cat = document.querySelector('.catalogue');
    cat.classList.toggle('hide');
    // Show first book
    if (!cat.classList.contains('hide')) {
        currentIndex = 0; 
        renderBook();
    }
    //Create next button
   // Locate the existing button if it's already on the page
const sideNextActive = document.querySelector('#sideNext');

if (myLibrary.length > 1) {
    // Only create the button if it doesn't already exist
    if (!sideNextActive) {
        const side = document.querySelector('.sidebar');
        sideNext = document.createElement('button'); 
        sideNext.textContent = 'Next';
        sideNext.setAttribute('id', 'sideNext');
        side.append(sideNext);

        sideNext.addEventListener('click', () => {
            currentIndex++;
            if (currentIndex >= myLibrary.length) {
                currentIndex = 0;
            } 
            renderBook();
        });
    }
} else {
    if (sideNextActive) {
        sideNextActive.remove();
        // Clear the global reference if you are using one
        if (typeof sideNext !== 'undefined') sideNext = null;
    }
}
});
renderBook();


//next is to make cat populate myLibrary[0]


