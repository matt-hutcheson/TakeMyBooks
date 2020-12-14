import Book from "./Book"
import {useState} from 'react'


const BookDetail = ({title, author, genre, barcode, user}) => {
    
    const [clicked, setClick] = useState(false)

    const handleClick = () => {
       setClick (true)
    }

    return(
        <>
            <h1>This is the BookDetail element</h1>
            <p >Title: { title }</p>
            <button onClick={ handleClick } >Show</button>
            {clicked ? <Book title={title} author={author} genre={genre} barcode={barcode} user={user} /> : <p>nothing</p>}
        </>
    )
}

export default BookDetail

