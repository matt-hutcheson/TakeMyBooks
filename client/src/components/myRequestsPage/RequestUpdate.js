import {updateRequest} from '../../fetches/RequestFetch';
const RequestUpdate = ({selectedRequest}) =>{
    
    
    return(
        <>
        <form action="">
            <select name="status" id="status">
                <option value="">Approve</option>
                <option value="">Reject</option>
                <option value="">Cancel</option>
            </select>
            <button>Update Status</button>
        </form>
        </>
    );
};
export default RequestUpdate;