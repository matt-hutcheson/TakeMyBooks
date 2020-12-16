import MyBookDetail from './MyBookDetail'

const MyBookList = ({myBooks}) => {

  if(!myBooks) {
    return(
      <p>loading</p>
    )
  }

  const bookElement = myBooks.map((book,index) => {
    return (<MyBookDetail key={index} book={book}/>)
  })

  return (
    <>
      <p id="my-books-title">My books</p>
      <ul>
          {bookElement}
      </ul>
    </>
  ) 
}


export default MyBookList