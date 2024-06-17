const form = document.getElementById("bookForm");
const tableBody = document.getElementById("booksTableBody");

let books = JSON.parse(localStorage.getItem("books")) || [];

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const bookName = document.getElementById("bookName").value;
    const authorName = document.getElementById("authorName").value;
    const bookDescription = document.getElementById("bookDescription").value;
    const addingDate = document.getElementById("addingDate").value;
    const category = document.getElementById("category").value;
    const bookPrice = document.getElementById("bookPrice").value;

    const book = {
        name: bookName,
        author: authorName,
        description: bookDescription,
        date: addingDate,
        category: category,
        price: bookPrice
    };

    books.push(book);

    localStorage.setItem("books", JSON.stringify(books));

    const row = document.createElement("tr");
    const bookNameCell = document.createElement("td");
    const authorNameCell = document.createElement("td");
    const bookDescriptionCell = document.createElement("td");
    const addingDateCell = document.createElement("td");
    const categoryCell = document.createElement("td");
    const bookPriceCell = document.createElement("td");
    const actionCell = document.createElement("td");

    bookNameCell.textContent = bookName;
    authorNameCell.textContent = authorName;
    bookDescriptionCell.textContent = bookDescription;
    addingDateCell.textContent = addingDate;
    categoryCell.textContent = category;
    bookPriceCell.textContent = bookPrice;

    const buyButton = document.createElement("button");
    buyButton.className = "button";
    buyButton.textContent = "Buy";
    buyButton.onclick = function () {
        alert("You bought the book!");
    };

    const deleteButton = document.createElement("button");
    deleteButton.className = "bookmark-button";
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
        const index = books.indexOf(book);
        if (index!== -1) {
            books.splice(index, 1);
            localStorage.setItem("books", JSON.stringify(books));
        }
        row.remove();
    };

    actionCell.appendChild(buyButton);
    actionCell.appendChild(deleteButton);

    row.appendChild(bookNameCell);
    row.appendChild(authorNameCell);
    row.appendChild(bookDescriptionCell);
    row.appendChild(addingDateCell);
    row.appendChild(categoryCell);
    row.appendChild(bookPriceCell);
    row.appendChild(actionCell);

    tableBody.appendChild(row);

    form.reset();
});

books.forEach((book) => {
    const row = document.createElement("tr");
    const bookNameCell = document.createElement("td");
    const authorNameCell = document.createElement("td");
    const bookDescriptionCell = document.createElement("td");
    const addingDateCell = document.createElement("td");
    const categoryCell = document.createElement("td");
    const bookPriceCell = document.createElement("td");
    const actionCell = document.createElement("td");

    bookNameCell.textContent = book.name;
    authorNameCell.textContent = book.author;
    bookDescriptionCell.textContent = book.description;
    addingDateCell.textContent = book.date;
    categoryCell.textContent = book.category;
    bookPriceCell.textContent = book.price;

    const buyButton = document.createElement("button");
    buyButton.className = "button";
    buyButton.textContent = "Buy";
    buyButton.onclick = function () {
        alert("You bought the book!");
    };

    const deleteButton = document.createElement("button");
    deleteButton.className = "bookmark-button";
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
        const index = books.indexOf(book);
        if (index!== -1) {
            books.splice(index, 1);
            localStorage.setItem("books", JSON.stringify(books));
        }
        row.remove();
    };

    actionCell.appendChild(buyButton);
    actionCell.appendChild(deleteButton);

    row.appendChild(bookNameCell);
    row.appendChild(authorNameCell);
    row.appendChild(bookDescriptionCell);
    row.appendChild(addingDateCell);
    row.appendChild(categoryCell);
    row.appendChild(bookPriceCell);
    row.appendChild(actionCell);

    tableBody.appendChild(row);
});