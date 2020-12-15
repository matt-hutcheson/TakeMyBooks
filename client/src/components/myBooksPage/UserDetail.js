import User from './User'

const UserDetail = ({username,community}) => {
    return (
        <>
            <h3>this is the user detail</h3>
            <image>User Image Here</image>
            <h2>My details:</h2>
            <User />
            <button>Add Book</button>
        </>
    )
}

export default UserDetail