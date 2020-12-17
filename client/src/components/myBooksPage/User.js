const User = ({userName, community, bookCount}) => {

    return (
        <>
            <div id="user-details">
                <p>Username: { userName }</p>
                <p>Community: { community }</p>
                <p>Numbers of books: {bookCount}</p>
            </div>
        </>
    )
}

export default User
