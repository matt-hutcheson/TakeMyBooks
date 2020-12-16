import User from './User'


const UserDetail = ({currentUser}) => {

    return (
        <>
            <p id="my-details">My details:</p>
            <User firstName={currentUser.firstName} community={currentUser.community}/>
            <button>Add Book</button>
        </>
    )
}

export default UserDetail



        