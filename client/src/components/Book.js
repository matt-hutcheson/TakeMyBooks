const Book = ({title, author, genre, barcode, user}) => {
    return (
        <div>
            <p>Title: { title }</p>
            <p>Author: { author }</p>
            <p>Genre: { genre }</p>
            <p>Barcode: { barcode }</p>
            <p>User: { user }</p>
        </div>

    )
}

export default Book