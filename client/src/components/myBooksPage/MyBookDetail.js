const MyBookDetail = ({book}) => {
    
    console.log(book.image)
    
    return (
        <>
            <h1>this is the my book detail</h1>
            <h4>Title: { book.title }</h4>
            <h4>Author: { book.author }</h4>
            <h4>Genre: { book.genre }</h4>
            <img src={book.image} alt="book cover"/>
        </>    
    )
}

export default MyBookDetail
