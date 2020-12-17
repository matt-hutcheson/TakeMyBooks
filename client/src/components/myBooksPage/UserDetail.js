import User from './User'


const UserDetail = ({currentUser}) => {

    return (
        <>
            <p id="my-details">My details:</p>
            <User userName={currentUser.userName} community={currentUser.community}/>
            <button>Add Book</button>
        </>
    )
}

export default UserDetail



