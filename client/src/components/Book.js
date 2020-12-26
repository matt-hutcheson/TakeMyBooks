const Book = ({author, genre, barcode}) => {
    return (
        <div>
            <p>Author: { author }</p>
            <p>Genre: { genre }</p>
            <p>ISBN: { barcode }</p>
            {/* <image></image> */}
        </div>

    )
}

export default Book