// Dyanamically modify the dom and add basic Events..

// book object 
// boooks array



class Book {
    constructor(name, author){
        this.name = name;
        this.author = author;
    }
}


let books = [
    {
        title: 'Sam\'s journey in JavaScript',
        author: 'Sam Doe'
    },
    {
        title: 'My journey as asoftware Developer',
        author: 'Jane Doe'
    }
]

//Creating an element
const library = document.querySelector('.library');

const createBookElement = (books) => {
    const bookItems = document.createElement('div');
    bookItems.innerHTML = `
    <p>${books.title}</p>
    <p>${books.author}</p>
    <button>Remove</button>
    <hr>
    `;
library.appendChild(bookItems);
}

books.forEach(createBookElement);



const add = document.querySelector('form')

// add.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     let book = new Book(document.getElementById('title').value,document.getElementById('author').value)

//     books.push(book)
//     document.querySelector('form').reset();
//     books.forEach((book)={
//         library.innerHTML += `<div class="book-item">
//         <p>${book.name}</p>
//         <p>${book.author}</p>
//         <button>Remove</button>
//     </div>`

//     })
  
//     console.log(books)
// })
