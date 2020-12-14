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

const getRequestsByOwnerIdAndRequestId = (ownerID, requestId) => {
    return(
        fetch(`${url}/owner/${ownerID}?request-id=${requestId}`)
            .then(res => res.json())
    );
};

const getRequestsByOwnerIdAndStatus = (ownerID, status) => {
    return(
        fetch(`${url}/owner/${ownerID}?status=${status}`)
            .then(res => res.json())
    );
};

const getRequestsByOwnerIdAndStatusAndRequestId = (ownerID, status, requestId) => {
    return(
        fetch(`${url}/owner/${ownerID}?status=${status}&request-id=${requestId}`)
            .then(res => res.json())
    );
};

const getRequestsByRequesterId = (requesterId) => {
    return(
        fetch(`${url}/requester/${requesterId}`)
            .then(res => res.json())
    );
};



const postrequest = (request) => {
    return(
        fetch(`${url}`, {
            method: 'post',
            body: JSON.stringify(request)
        })
    );
};

const updaterequest = (request, requestId) => {
    return(
        fetch(`${url}/${requestId}`, {
            method: 'put',
            body: JSON.stringify(request)
        })
    );
};

const deleterequest = (requestId) => {
    return(
        fetch(`${url}/${requestId}`, {
            method: 'delete',
        })
    );
};