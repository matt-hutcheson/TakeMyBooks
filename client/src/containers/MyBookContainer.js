import MyBookList from '../components/myBooksPage/MyBookList'
import UserDetail from '../components/myBooksPage/UserDetail'
import {useEffect, useState} from 'react'
import {getBooksByOwnerId} from '../fetches/BookFetch'

const MyBookContainer = ({user}) => {

    const [myBooks, setMyBooks] = useState([])

    useEffect(() => { 
        if (user){
            setMyBooks(user.shareBooks)
        }
    },[user])

    return(

        <>
        <h1>this is the MyBookContainer displaying a user</h1>
        <UserDetail currentUser = "user"/>

        <MyBookList myBooks = "myBooks"/>
        </>
    )
}


export default MyBookContainer