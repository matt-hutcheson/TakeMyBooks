let url = "http://localhost:8080/books";

const getBooks = () => {
    return(
        fetch(url)
            .then(res => res.json())
    );
};

const getBooksByAuthorAndGenre = (author, genre) => {
    return(
        fetch(`${url}?author=${author}&genre=${genre}`)
            .then(res => res.json())
    );
};

const getBooksByAuthor = (author) => {
    return(
        fetch(`${url}?author=${author}`)
            .then(res => res.json())
    );
};

const getBooksByGenre = (genre) => {
    return(
        fetch(`${url}?genre=${genre}`)
            .then(res => res.json())
    );
};

const getBooksByOwnerId = (ownerId) => {
    return(
        fetch(`${url}?ownerId=${ownerId}`)
            .then(res => res.json())
    );
};

const getBooksById = (bookId) => {
    return(
        fetch(`${url}/${bookId}`)
    );
};

const postBook = (book) => {
    return(
        fetch(`${url}`, {
            method: 'post',
            body: JSON.stringify(book)
        })
    );
};

const updateBook = (book, bookId) => {
    return(
        fetch(`${url}/${bookId}`, {
            method: 'put',
            body: JSON.stringify(book)
        })
    );
};

const deleteBook = (bookId) => {
    return(
        fetch(`${url}/${bookId}`, {
            method: 'delete',
        })
    );
};


