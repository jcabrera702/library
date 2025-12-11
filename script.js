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
    myLibrary.push(newBook)
}

function browse (){
    // User input stuff here

    myLibrary.includes("My journey")
}

// const myBook = addBook("My journey","Justin","1", "true");