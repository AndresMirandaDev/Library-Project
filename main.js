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
    const titleContainer = document.createElement("div");
    const authorContainer = document.createElement("div");
    const pagesContainer = document.createElement("div");
    const statusContainer = document.createElement("div");

    titleContainer.innerText = currentLibrary[currentLibrary.length-1]["title"].toUpperCase();
    authorContainer.innerText = currentLibrary[currentLibrary.length-1]["author"].toUpperCase();
    pagesContainer.innerText =  currentLibrary[currentLibrary.length-1]["pages"]+ " PAGES";
    statusContainer.innerText = currentLibrary[currentLibrary.length-1]["status"].toUpperCase();
   
    bookContainer.appendChild(titleContainer).className = "book-info";
    bookContainer.appendChild(authorContainer).className = "book-info";
    bookContainer.appendChild(pagesContainer).className = "book-info";
    bookContainer.appendChild(statusContainer).className = "book-info";

    const deleteButton = document.createElement("div");
    deleteButton.innerText = "Delete"
        
    const statusButton = document.createElement("div");
    statusButton.innerText = "Change Status"
    
    bookContainer.appendChild(statusButton).className = "change-status";
    bookContainer.appendChild(deleteButton).className = "delete-button";
    

    bookContainer.setAttribute("id", currentLibrary[currentLibrary.length-1]["title"])
    booksGrid.appendChild(bookContainer).className = "book";

}

const deleteButton = document.querySelector(".delete-button");
const statusButton = document.querySelector(".change-status");

document.addEventListener("click", function(e){
    if(e.target.className === "delete-button"){
        e.target.parentElement.remove();
    }else if(e.target.className === "change-status"){
        const status = e.target.previousElementSibling;
        if(status.innerText === "READ"){
            status.innerText = "NOT READ YET"
        }else if(status.innerText === "NOT READ YET"){
            status.innerText = "READ"
        }
    }
})




