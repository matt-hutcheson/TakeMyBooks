const User = ({userName, community, bookCount, requestCount}) => {

    return (
        <>
            <div id="user-details">
                <p>Username: { userName }</p>
                <p>Community: { community }</p>
                <p>Numbers of books: {bookCount}</p>
                <p>Numbers of active requests: {requestCount}</p>
            </div>
        </>
    )
}

export default User
