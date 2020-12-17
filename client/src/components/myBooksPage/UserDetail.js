import User from './User'


const UserDetail = ({currentUser}) => {

    return (
        <>
            <h3>this is the user detail</h3>
            <h2>My details:</h2>
            <User userName={currentUser.userName} community={currentUser.community}/>
            <button>Add Book</button>
        </>
    )
}

export default UserDetail



