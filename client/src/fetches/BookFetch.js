export const getBooks = () => {
    return(
        fetch("http://localhost:8080/books")
            .then(res => res.json())
    );
};

export const getBooksByTitleOrAuthorOrGenreSearch = (search) => {
    return(
        fetch(`http://localhost:8080/books?search=true&title=${search}&author=${search}&genre=${search}`)
        .then(res => res.json())
    )
}

export const getBooksByAuthorAndGenre = (author, genre) => {
    return(
        fetch(`http://localhost:8080/books?author=${author}&genre=${genre}`)
            .then(res => res.json())
    );
};

export const getBooksByAuthor = (author) => {
    return(
        fetch(`http://localhost:8080/books?author=${author}`)
            .then(res => res.json())
    );
};

export const getBooksByGenre = (genre) => {
    return(
        fetch(`http://localhost:8080/books?genre=${genre}`)
            .then(res => res.json())
    );
};

export const getBooksByOwnerId = (ownerId) => {
    return(
        fetch(`http://localhost:8080/books?ownerId=${ownerId}`)
            .then(res => res.json())
    );
};

export const getBooksById = (bookId) => {
    return(
        fetch(`http://localhost:8080/books/${bookId}`)
        .then(res => res.json())
    );
};

export const postBook = (book, userId) => {
    return(
        fetch(`http://localhost:8080/user/${userId}/my-books/add-book`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(book)
        }).then(res => res.json())
    );
};

export const postBarcode = (isbn, currentUser) => {
    console.log(isbn)
    console.log(currentUser)
    return(
        fetch(`http://localhost:8080/my-books/add-book/${isbn}`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(currentUser)
        }).then(res => res.json())
    )
}

export const updateBook = (book, bookId) => {
    return(
        fetch(`http://localhost:8080/books/${bookId}`, {
            method: 'put',
            body: JSON.stringify(book)
        })
    );
};

export const deleteBook = (bookId) => {
    return(
        fetch(`http://localhost:8080/books/${bookId}`, {
            method: 'delete',
        })
    );
};


