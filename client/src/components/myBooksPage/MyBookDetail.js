const MyBookDetail = ({book}) => {
    
    return (
        <>
            <img id="book-covers" src={book.image} alt="book cover"/>
            <p>Title: { book.title }</p>
            <p>Author: { book.author }</p>
            <p>Genre: { book.genre }</p>
        </>    
    )
}

export default MyBookDetail
