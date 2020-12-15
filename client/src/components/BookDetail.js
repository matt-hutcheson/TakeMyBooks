import Book from "./Book"
import {useState} from 'react'



const BookDetail = ({title, author, genre, barcode, user}) => {
    
    const [clicked, setClick] = useState(false)

    const handleClick = () => {
       clicked ? setClick(false):setClick(true)
    }

    return(
        <>
            
            <button onClick={ handleClick }>{clicked ? "Hide" : "Show"}</button>
            <p >Title: { title }</p>
            {clicked ? <Book author={author} genre={genre} barcode={barcode}/> : null}
        </>
  );
        
}

export default BookDetail
