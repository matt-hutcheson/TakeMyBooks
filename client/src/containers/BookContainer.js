import BookList from "../components/BookList"

const BookContainer = () => {

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
        <BookList books={books} />
      </>   
    )
}
// }

export default BookContainer