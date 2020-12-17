import { useState } from 'react';
import {updateRequest} from '../../fetches/RequestFetch';
const RequestUpdate = ({ id, owner, requester, book}) =>{

    const [status, setStatus] = useState('');

    const handleStatusChange = (event) => {
        setStatus(event.target.value);
    };

    const handleUpdateRequest = (updatedRequest, id) => {
		updateRequest(updatedRequest, id);
	};
    
    const handleUpdateRequestSubmit = (event) => {
		event.preventDefault();
		if (
			!status
		) {
			return;
		}

		handleUpdateRequest({
			status: status,
			owner: owner,
            requester: requester,
            book: book
        }, id);
        
        setStatus('');
		
	};
    
    return(
        <>
        <form className="form">
			<label className="label" htmlFor="status">Update Status:</label>
            <select className="input" name="status" id="status" placeholder="choose status" onChange={handleStatusChange} required>
                <option selected disabled>please choose a status</option>
                <option value="Approved">Approve</option>
                <option value="Rejected">Reject</option>
                <option value="Completed">Complete</option>
            </select>
            <input className="submit" type="submit" value="Update Status" onClick={handleUpdateRequestSubmit}/>
        </form>
        </>
    );
};
export default RequestUpdate;