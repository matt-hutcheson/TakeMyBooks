import User from './User'


const UserDetail = ({username,community}) => {

    return (
        <>
            <h3>this is the user detail</h3>
            <h2>My details:</h2>
            <User username={username} community={community}/>
            <button>Add Book</button>
        </>
    )
}

export default UserDetail

// How does it know which user it is??
// Will not have user image


        