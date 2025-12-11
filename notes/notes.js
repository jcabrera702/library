// This adds a form after clicking .add button for user to fill in
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

        
         wrapper.append(createForm);
        createForm.append(createLabelTitle, createInputTitle, createLabelAuthor, createInputAuthor, createLabelPages, createInputPages, createLabelRead, createInputRead, createBtnSubmit);
        

    })
}
addInfo();

// This records the data from the form

const formCard = document.querySelector('.book-card');
formCard.addEventListener('submit', (event) =>{
    // This stops the browsers default submission/refresh
    event.preventDefault();
    const wrapper = document.querySelector('.book-wrapper');
   
    const title = event.target.title.value;
    const author = event.target.author.value;
    const pages = event.target.pages.value;
    const read = event.target.read.checked;

    const createCard = document.createElement('div');
    createCard.setAttribute('class', 'book-display');
// Store the returned Book object in a variable
    const bookObject = addBook(title, author, pages, read);
    const newBookId = bookObject.id

        const createId = document.createElement('div');
        createId.textContent = `Book Id: ${newBookId}`;
        const createTitle = document.createElement('div');
        createTitle.textContent = `Title: ${title}`;
    
    createCard.append(createId, createTitle);
    wrapper.append(createCard);
    form.reset();
})
