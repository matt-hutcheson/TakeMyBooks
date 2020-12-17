const MyBookDetail = ({book}) => {


    return (
        <>
            <h3>Title: { book.title }</h3>
            <p>Author: { book.author }</p>
            <p>Genre: { book.genre }</p>
            <img src={book.image} alt="book cover"/>
        </>
    )
}

export default MyBookDetail
