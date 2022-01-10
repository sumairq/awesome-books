// Dyanamically modify the dom and add basic Events..

// book object 
// boooks array



class Book {
    constructor(name, author){
        this.name = name;
        this.author = author;
    }
}


let books = []


const library = document.querySelector('library')
const add = document.querySelector('form')

add.addEventListener("submit",(e)=>{
    e.preventDefault();
    let book = new Book(document.getElementById('title').value,document.getElementById('author').value)

    books.push(book)
    document.querySelector('form').reset();
    books.forEach((book)={
        library.innerHTML += `<div class="book-item">
        <p>${book.name}</p>
        <p>${book.author}</p>
        <button>Remove</button>
    </div>`

    })
  
    console.log(books)
})
