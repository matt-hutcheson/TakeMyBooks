export const getRequests = () => {
    return(
        fetch("http://localhost:8080/requests")
            .then(res => res.json())
    );
};

export const getRequestsById = (requestId) => {
    return(
        fetch(`http://localhost:8080/requests/${requestId}`)
    );
};

export const getRequestsByOwnerId = (ownerId) => {
    return(
        fetch(`http://localhost:8080/requests/owner/${ownerId}`)
            .then(res => res.json())
    );
};

export const getRequestsByOwnerIdAndRequestId = (ownerId, requestId) => {
    return(
        fetch(`http://localhost:8080/requests/owner/${ownerId}?request-id=${requestId}`)
            .then(res => res.json())
    );
};

export const getRequestsByOwnerIdAndStatus = (ownerId, status) => {
    return(
        fetch(`http://localhost:8080/requests/owner/${ownerId}?status=${status}`)
            .then(res => res.json())
    );
};

export const getRequestsByOwnerIdAndStatusAndRequestId = (ownerId, status, requestId) => {
    return(
        fetch(`http://localhost:8080/requests/owner/${ownerId}?status=${status}&request-id=${requestId}`)
            .then(res => res.json())
    );
};

export const getRequestsByRequesterId = (requesterId) => {
    return(
        fetch(`http://localhost:8080/requests/requester/${requesterId}`)
            .then(res => res.json())
    );
};

export const getRequestsByRequesterIdAndStatus = (requesterId, status) => {
    return(
        fetch(`http://localhost:8080/requests/requester/${requesterId}?status=${status}`)
            .then(res => res.json())
    );
};

export const getRequestsByRequesterIdAndRequestId = (requesterId, requestId) => {
    return(
        fetch(`http://localhost:8080/requests/requester/${requesterId}?request-id=${requestId}`)
            .then(res => res.json())
    );
};

export const getRequestsByRequesterIdAndStatusAndRequestId = (requesterId, status, requestId) => {
    return(
        fetch(`http://localhost:8080/requests/requester/${requesterId}?status=${status}&request-id=${requestId}`)
            .then(res => res.json())
    );
};


export const postRequest = (request) => {
    return(
        fetch(`http://localhost:8080/requests`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(request)
        })
    );
};

export const updateRequest = (request, requestId) => {
    return(
        fetch(`http://localhost:8080/requests/${requestId}`, {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(request)
        })
    );
};

export const deleteRequest = (requestId) => {
    return(
        fetch(`http://localhost:8080/requests/${requestId}`, {
            method: 'delete',
        })
    );
};
