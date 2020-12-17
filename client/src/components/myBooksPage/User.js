const User = ({username, community}) => {
    return (
        <> 
            <div id="user-details">
                <p>Username: { username }</p>
                <p>Community: { community }</p>
                <p>Numbers of books:</p>
                <p>Numbers of exchanged books:</p>
            </div>
        </>
    )
}

export default User