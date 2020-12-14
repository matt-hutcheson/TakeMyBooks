import BookList from "../components/BookList"
import React, { useState } from 'react';

const BookContainer = () => {
    // const [books, setBooks] = useState([]);

        const books = [ 
            {
                title: "title",
                author: "author",
                genre: "genre",
                barcode: "barcode",
                user: "user1"
            },
            {   
                title: "title2",
                author: "author2",
                genre: "genre2",
                barcode: "barcode2",
                user: "user2"
            },
            {   
                title: "title3",
                author: "author3",
                genre: "genre3",
                barcode: "barcode3",
                user: "user3"
            }
        ]
    
    return(
      <>  
        <h1>This is the BookContainer</h1> 
        <BookList books={books} />
      </>   
    )
}
// }

export default BookContainer