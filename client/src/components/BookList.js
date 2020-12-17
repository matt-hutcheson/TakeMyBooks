import BookDetail from "./BookDetail"

const BookList = ({books}) => {
    const bookEls = books.map((book, i) => {
        return (<BookDetail key={i} title={book.title} author={book.author} genre={book.genre} barcode={book.barcode} image={book.image} user={book.user} />);
    });

    return (
        <>
            <h1>Available Books</h1>
            <ul>
                {bookEls}
            </ul>

        </>
    )
}

export default BookList

