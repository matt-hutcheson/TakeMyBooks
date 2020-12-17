import {useState, useEffect} from 'react';
import User from './User'


const UserDetail = ({currentUser}) => {

const [noBooks, setNoBooks] = useState(0);
const [noRequests, setNoRequests] = useState(0);

    const calcBooks = () => {
        if (Object.keys(currentUser).length > 0){
            setNoBooks(currentUser.shareBooks.length);
        }
    }

    // const calcRequests = () => {
    //     if (Object.keys(currentUser).length > 0){
    //         setNoRequests(
    //             if ((currentUser.requests.filter(({status}) => status === "Pending")).length > 0) {
    //                 currentUser.requests.filter(({status}) => status === "Pending").reduce((sum, request) => sum + 1)
    //             });
    //     }
    // }

    useEffect(() => {
        if (Object.keys(currentUser).length > 0){
            calcBooks();
        }
        // calcRequests();
    }, [currentUser])

    return (
        <>
            <p id="my-details">My details:</p>
            <User userName={currentUser.userName} community={currentUser.community} bookCount={noBooks}/>
        </>
    )

}

export default UserDetail



