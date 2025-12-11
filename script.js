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

function addInfo (){
    const wrapper = document.querySelector('.book-wrapper');
    const addBtn = document.querySelector('.add');
    addBtn.addEventListener('click', (event) =>{
        const createForm = document.createElement('form');
        const createLabelTitle = document.createElement('label');
        const createInputTitle = document.createElement('input');
        const createLabelAuthor = document.createElement('label');
        const createInputAuthor = document.createElement('input');
        const createLabelPages = document.createElement('label');
        const createInputPages = document.createElement('input');
        const createLabelRead = document.createElement('label');
        const createInputRead = document.createElement('input');
        const createBtnSubmit = document.createElement('button');

        createForm.setAttribute('class', 'book-card');
        createLabelTitle.setAttribute('for', 'title');
        createLabelTitle.textContent = 'Title';
        const titleInputAttributes ={type: 'text', id: 'title', name: 'title', required: true };
        for (const key in titleInputAttributes){ createInputTitle.setAttribute(key, titleInputAttributes[key])};
        createLabelAuthor.setAttribute('for', 'author');
        createLabelAuthor.textContent = 'Author';
        const authorInputAttributes = {type: 'text', id: 'author', name: 'author', required: true};
        for (const key in authorInputAttributes){createInputAuthor.setAttribute(key, authorInputAttributes[key])};
        createLabelPages.setAttribute('for', 'pages');
        createLabelPages.textContent = 'Pages';
        const pagesInputAttributes = {type: 'text', id: 'pages', name: 'pages', required: true};
        for (const key in pagesInputAttributes){createInputPages.setAttribute(key, pagesInputAttributes )};
        createLabelRead.setAttribute('for', 'read');
        createLabelRead.textContent = 'Read?';
        const readInputAttributes = {type: 'checkbox', name: 'read', id: 'read'};
        for (const key in readInputAttributes){createInputRead.setAttribute(key, readInputAttributes[key])};
        createBtnSubmit.setAttribute('type', 'submit');
        createBtnSubmit.setAttribute('class', 'submit');
        createBtnSubmit.textContent = 'Add Book';

        
        const popup = wrapper.append(createForm);
        const popupElements = createForm.append(createLabelTitle, createInputTitle, createLabelAuthor, createInputAuthor, createLabelPages, createInputPages, createLabelRead, createInputRead, createBtnSubmit);
        return popup;
        return popupElements;

    })
}
addInfo();

function browse (){
    // User input stuff here

    myLibrary.includes("My journey")
}

// const myBook = addBook("My journey","Justin","1", "true");