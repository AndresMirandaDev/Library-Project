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
    
    if(titleInput != "" && authorInput != "" && pagesInput != "" && statusInput != ""){
        addBook();
    }

})

function addBook(){
     
    const booksGrid = document.querySelector(".books-grid")
    const bookContainer = document.createElement("div");

    bookContainer.innerText = "Title: " + currentLibrary[currentLibrary.length-1]["title"]+ "\n" + "Author: "+currentLibrary[currentLibrary.length-1]["author"]+"\n" + "Pages: " + currentLibrary[currentLibrary.length-1]["pages"] + "\n" + "Status: " + currentLibrary[currentLibrary.length-1]["status"];
    const deleteButton = document.createElement("div");
    deleteButton.innerText = "Delete"
        
    const statusButton = document.createElement("div");
    statusButton.innerText = "Change Status"

    bookContainer.appendChild(deleteButton).className = "delete-button";
    bookContainer.appendChild(statusButton).className = "change-status";

    bookContainer.setAttribute("id", currentLibrary[currentLibrary.length-1]["title"])
    booksGrid.appendChild(bookContainer).className = "book";

}

const deleteButton = document.querySelector(".delete-button");
const statusButton = document.querySelector(".change-status");

document.addEventListener("click", function(e){
    if(e.target.className === "delete-button"){
        e.target.parentElement.remove();
    }
})




