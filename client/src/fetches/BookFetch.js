const getBooks = () => {
    return(
        fetch("http://localhost:8080/books")
            .then(res => res.json())
    );
}

const getBooksByAuthorAndGenre = (author, genre) => {
    return(
        fetch(`http://localhost:8080/books?author=${author}&genre=${genre}`)
            .then(res => res.json())
    );
}

const getBooksByAuthor = () => {
    return(
        fetch(`http://localhost:8080/books?author=${author}`)
            .then(res => res.json())
    );
}