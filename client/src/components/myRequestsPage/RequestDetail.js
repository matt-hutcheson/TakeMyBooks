const RequestDetail = ({selectedRequest, currentUser})=>{

    if(selectedRequest.owner.id===currentUser.id){
        return (
            <>
            <h4>You are sharing "{selectedRequest.book.title}" with {selectedRequest.requester.firstName} {selectedRequest.requester.lastName}.</h4>
            <h5>You can contact them by E-mail to arrange the swap.</h5>
            <h6>{selectedRequest.requester.email}</h6>
            </>
        )} else {
            return(
                <>
                <h4>You are requesting "{selectedRequest.book.title}" from 
                {selectedRequest.owner.firstName} {selectedRequest.owner.lastName}.</h4>
                <h5>You can contact them by E-mail to arrange the swap.</h5>
                <h6>{selectedRequest.owner.email}</h6>
                </>
            );
        }
    console.log(currentUser)
    console.log(selectedRequest);
    return(
    <h1>details</h1>
    )
};
export default RequestDetail;