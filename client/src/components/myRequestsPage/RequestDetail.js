import RequestUpdate from "./RequestUpdate"
import { deleteRequest } from '../../fetches/RequestFetch'

const RequestDetail = ({onUpdateRequest, selectedRequest, currentUser, resetSelectRequest})=>{
    
    const cancelRequest = ()=>{
        deleteRequest(selectedRequest.id)
        .then(()=>resetSelectRequest());        
    }

    if(selectedRequest.owner.id===currentUser.id){
        return (
            <>
            <h4>You are sharing "{selectedRequest.book.title}" 
            with {selectedRequest.requester.userName}.</h4>
            <h5>You can contact them by E-mail to arrange the swap.</h5>
            <h6>{selectedRequest.requester.email}</h6>
            <button onClick={resetSelectRequest}>Go Back</button>
            <RequestUpdate startingStat={selectedRequest.status} id={selectedRequest.id} book={selectedRequest.book}
            requester={selectedRequest.requester} owner={selectedRequest.owner} resetSelectRequest={resetSelectRequest}/>
            </>
        )
    } else {
            return(
                <>
                <h4>You are requesting "{selectedRequest.book.title}" 
                from {selectedRequest.owner.userName}.</h4>
                <h5>You can contact them by E-mail to arrange the swap.</h5>
                <h6>{selectedRequest.owner.email}</h6>
                <button onClick={resetSelectRequest}>Go Back</button>
                <button onClick={cancelRequest}>Cancel my request</button>
                <RequestUpdate startingStat={selectedRequest.status} id={selectedRequest.id} book={selectedRequest.book} 
                requester={selectedRequest.requester} owner={selectedRequest.owner} resetSelectRequest={resetSelectRequest}/>
                </>
            )
        }
        
};
export default RequestDetail;