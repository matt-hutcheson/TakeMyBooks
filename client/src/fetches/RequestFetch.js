let url = "http://localhost:8080/requests";

const getRequests = () => {
    return(
        fetch(url)
            .then(res => res.json())
    );
};

const getRequestsById = (requestId) => {
    return(
        fetch(`${url}/${requestId}`)
    );
};

const getRequestsByOwnerId = (ownerId) => {
    return(
        fetch(`${url}/owner/${ownerId}`)
            .then(res => res.json())
    );
};

const getRequestsByOwnerIdAndRequestId = (ownerId, requestId) => {
    return(
        fetch(`${url}/owner/${ownerId}?request-id=${requestId}`)
            .then(res => res.json())
    );
};

const getRequestsByOwnerIdAndStatus = (ownerId, status) => {
    return(
        fetch(`${url}/owner/${ownerId}?status=${status}`)
            .then(res => res.json())
    );
};

const getRequestsByOwnerIdAndStatusAndRequestId = (ownerId, status, requestId) => {
    return(
        fetch(`${url}/owner/${ownerId}?status=${status}&request-id=${requestId}`)
            .then(res => res.json())
    );
};

const getRequestsByRequesterId = (requesterId) => {
    return(
        fetch(`${url}/requester/${requesterId}`)
            .then(res => res.json())
    );
};

const getRequestsByRequesterIdAndStatus = (requesterId, status) => {
    return(
        fetch(`${url}/requester/${requesterId}?status=${status}`)
            .then(res => res.json())
    );
};

const getRequestsByRequesterIdAndRequestId = (requesterId, requestId) => {
    return(
        fetch(`${url}/requester/${requesterId}?request-id=${requestId}`)
            .then(res => res.json())
    );
};

const getRequestsByRequesterIdAndStatusAndRequestId = (requesterId, status, requestId) => {
    return(
        fetch(`${url}/requester/${requesterId}?status=${status}&request-id=${requestId}`)
            .then(res => res.json())
    );
};


const postRequest = (request) => {
    return(
        fetch(`${url}`, {
            method: 'post',
            body: JSON.stringify(request)
        })
    );
};

const updateRequest = (request, requestId) => {
    return(
        fetch(`${url}/${requestId}`, {
            method: 'put',
            body: JSON.stringify(request)
        })
    );
};

const deleteRequest = (requestId) => {
    return(
        fetch(`${url}/${requestId}`, {
            method: 'delete',
        })
    );
};