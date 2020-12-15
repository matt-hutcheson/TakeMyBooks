import Book from "./Book"
import {useState} from 'react'



const BookDetail = ({title, author, genre, barcode, user}) => {
    
    const [clicked, setClick] = useState(false)

    const handleClick = () => {
        // this.setState(state => ({
        //     isToggleOn: !state.isToggleOn
        // }));
       setClick (true)
    }

    return(
        <>
            <p >Title: { title }</p>
            <button onClick={ handleClick }>Show</button>
            {/* {this.state.isToggleOn? 'Show':'Hide'} */}
            {clicked ? <Book author={author} genre={genre} barcode={barcode}/> : <p>something</p>}
        </>
  );
        
}

export default BookDetail
