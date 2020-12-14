let url = "http://localhost:8080/users";

const getUsers = () => {
    return(
        fetch(url)
            .then(res => res.json())
    );
};

const getUsersByFirstAndLastNames = (firstName, lastName) => {
    return(
        fetch(`${url}?firstName=${firstName}&lastName=${lastName}`)
            .then(res => res.json())
    );
};

const getUsersByCommunity = (community) => {
    return(
        fetch(`${url}?community=${community}`)
            .then(res => res.json())
    );
};

const getUsersByShareBooksId = (bookId) => {
    return(
        fetch(`${url}?shareBooksId=${bookId}`)
            .then(res => res.json())
    );
};


const getUsersById = (userId) => {
    return(
        fetch(`${url}/${userId}`)
    );
};

const postUser = (user) => {
    return(
        fetch(`${url}`, {
            method: 'post',
            body: JSON.stringify(user)
        })
    );
};

const updateUser = (user, userId) => {
    return(
        fetch(`${url}/${userId}`, {
            method: 'put',
            body: JSON.stringify(user)
        })
    );
};

const deleteUser = (userId) => {
    return(
        fetch(`${url}/${userId}`, {
            method: 'delete',
        })
    );
};