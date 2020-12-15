import MyBookList from '../components/myBooksPage/MyBookList'

const MyBooksContainer = () => {

    const books = [ 
        {
            title: "title",
            author: "author",
            genre: "genre",
            barcode: "barcode",
        },
        {   
            title: "title2",
            author: "author2",
            genre: "genre2",
            barcode: "barcode2",
        },
        {   
            title: "title3",
            author: "author3",
            genre: "genre3",
            barcode: "barcode3",
        }
    ]

    const users = [
        {
            username: "username1",
            community: "community",
        },
        {
            username: "username2",
            community: "community"
        }
    ]

return(
  <>  
    <MyBookList books={books} />
    <MyBookList users={users} />
  </>   
)

}


export default MyBooksContainer