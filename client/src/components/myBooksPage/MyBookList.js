
import MyBookDetail from './MyBookDetail'


const MyBookList = ({myBooks}) => {

  const bookElement = myBooks.map((book,index) => {

    return (<MyBookDetail key={index} book={book}/>)
    
  })  
   
    return (
        <>
          <ul>
              {myBooks}
          </ul>
        </>

    )
}


export default MyBookList