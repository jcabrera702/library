# My Library Project (TOP) ✅

The Odin Project Full Stack JavaScript Assignment
## 📈  Features
- Simple Sidebar for navigation
- Toggle buttons for forms to add books
- Add Books
- Delete books
-Update read status

## 🧱 Architecture

### Global Scope
 myLibrary array, Book constructor, currentIndex in the global scope <br>
- Used as the single source of truth <br>

### Constructor Scope
- Runs when new book is called <br>
- Refers to the newly created object

### Function Scope
- addBook(), toggleFormDisplay(), renderBook()
### Event Listener Scope
- click events, submit events
- Executes later, after user interaction
- Still remembers variables from outer scopes (closure)

### State Management
- currentIndex tracks which book is displayed
-  Updated by Next, Delete, and Catalogue buttons
- State changes trigger re-rendering

## 🔐 Security
Used ```.createTextNode()``` so that user inputs as text with<br>
no markup language possible executions

