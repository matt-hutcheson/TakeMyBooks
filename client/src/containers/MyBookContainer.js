import MyBookList from '../components/myBooksPage/MyBookList'

const MyBookContainer = () => {

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
            user: "user1"
        },
        {   
            title: "title3",
            author: "author3",
            genre: "genre3",
            barcode: "barcode3",
            user: "user1"
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


export default MyBookContainer