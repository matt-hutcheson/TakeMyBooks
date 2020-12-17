import RequestUpdate from "./RequestUpdate"
import { deleteRequest } from '../../fetches/RequestFetch'
import '../../styles/RequestDetail.css';

const RequestDetail = ({onUpdateRequest, selectedRequest, currentUser, resetSelectRequest})=>{

    const cancelRequest = ()=>{
        deleteRequest(selectedRequest.id)
        .then(()=>resetSelectRequest());
    }

    if(selectedRequest.owner.id===currentUser.id){
        return (
            <article className="reqDetailContainer">
                <div className="reqTextDetails">
                    <h4 class="reqDetailh4" >You are sharing: </h4>
                    <h5> "{selectedRequest.book.title}"</h5>
                    <h5>with {selectedRequest.requester.userName}.</h5>
                    { selectedRequest.status === "Approved" ? <h5>You can contact them by E-mail to arrange the swap.</h5> : selectedRequest.status === "Completed" ? <h5>Book sent to contact. Thank You.</h5> : <> </>}
                    { selectedRequest.status === "Approved" ? <h6>{selectedRequest.requester.email}</h6> : <> </>}
                    <h5>Status: {selectedRequest.status}</h5>
                </div>
                <button className="reqGoBack" onClick={resetSelectRequest}>Go Back</button>
                <RequestUpdate startingStat={selectedRequest.status} id={selectedRequest.id} book={selectedRequest.book}
                requester={selectedRequest.requester} owner={selectedRequest.owner} resetSelectRequest={resetSelectRequest}/>
            </article>
        )
    } else {
            return(
                <article className="reqDetailContainer">
                    <div className="reqTextDetails">
                        <h4>You are requesting "{selectedRequest.book.title}"
                        from {selectedRequest.owner.userName}.</h4>
                        { selectedRequest.status === "Approved" ? <h5>You can contact them by E-mail to arrange the swap.</h5> : selectedRequest.status === "Completed" ? <h5>Book recieved from contact. Enjoy your read.</h5> : <> </>}
                        { selectedRequest.status === "Approved" ? <h6>{selectedRequest.requester.email}</h6> : <> </>}
                        <h6>{selectedRequest.owner.email}</h6>
                    </div>
                    <button className="reqGoBack" onClick={resetSelectRequest}>Go Back</button>
                    <button className="cancelReq" onClick={cancelRequest}>Cancel my request</button>
                    <RequestUpdate startingStat={selectedRequest.status} id={selectedRequest.id} book={selectedRequest.book}
                    requester={selectedRequest.requester} owner={selectedRequest.owner} resetSelectRequest={resetSelectRequest}/>
                </article>
            )
        }

};
export default RequestDetail;
