import MyBookList from '../components/myBooksPage/MyBookList'
import UserDetail from '../components/myBooksPage/UserDetail'
import {useEffect, useState} from 'react'
import {getBooksByOwnerId} from '../fetches/BookFetch'
import '../styles/MyBooks.css';

const MyBookContainer = ({currentUser}) => {

    const [myBooks, setMyBooks] = useState([])

    useEffect(() => { 
        if (currentUser){
            
            setMyBooks(currentUser.shareBooks)
            console.log(myBooks)
        }
    },[currentUser])

    if(!currentUser){
        return(
            <p>loading</p>
        )
    } else {
        return(
            <>
                <UserDetail currentUser={currentUser}/>
                <MyBookList myBooks={myBooks}/>
            </>
        )
    }
}


export default MyBookContainer