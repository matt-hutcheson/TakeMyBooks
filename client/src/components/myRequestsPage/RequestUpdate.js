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
            <submit>Update Status</submit>
        </form>

        </>
    );
};
export default RequestUpdate;