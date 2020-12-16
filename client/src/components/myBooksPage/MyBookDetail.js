const MyBookDetail = ({title, author, genre, image}) => {
    return (
        <>
            <h1>this is the my book detail</h1>
            <h4>Title: { title }</h4>
            <h4>Author: { author }</h4>
            <h4>Genre: {genre }</h4>
            <h4>{ image }</h4>
        </>    
    )
}

export default MyBookDetail
