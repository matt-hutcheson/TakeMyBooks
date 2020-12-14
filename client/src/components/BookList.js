import BookDetail from "./BookDetail"

const BookList = ({books}) => { //prop = books
    const bookEls = books.map((book, i) => {
        return (<BookDetail key={i} title={book.title} author={book.author} genre={book.genre} barcode={book.barcode} user={book.user} />);
    });

    return (
        <>
            <h1>This is the BookList element</h1>
            <ul>
                {bookEls}
            </ul>
            
        </>
    )
}

export default BookList

//onclick of the book, show book details
