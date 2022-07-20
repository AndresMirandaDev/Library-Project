const currentLibrary = [];

function Book (title, author, pages, status){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

const submitButton = document.querySelector("#submit-button")

submitButton.addEventListener("click", function(){
    const titleInput = document.querySelector("#title").value;
    const authorInput = document.querySelector("#author").value;
    const pagesInput = document.querySelector("#pages").value;
    const statusInput = document.querySelector("#status").value;

    const newBook = new Book(titleInput, authorInput, pagesInput, statusInput);
    
    currentLibrary.push(newBook);
    
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#pages").value = "";
    document.querySelector("#status").value = "";
    
    console.log(currentLibrary)
    updateLibrary(currentLibrary)
})


function updateLibrary(library){
    let booksGrid = document.querySelector(".books-grid");
    library.map((book)=>{
        let bookContainer = document.createElement("div");
        bookContainer.innerText = "Title: " + book["title"]+ "\n" + "Author: "+book["author"]+"\n" + "Pages: " + book["pages"] + "\n" + "Status: " + book["status"];
        return booksGrid.appendChild(bookContainer).className="book";           
    })
}



