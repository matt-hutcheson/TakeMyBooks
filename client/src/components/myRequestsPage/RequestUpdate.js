import { useState } from 'react';
import {updateRequest} from '../../fetches/RequestFetch';
const RequestUpdate = ({ id, owner, requester, book}) =>{

    const [status, setStatus] = useState('');
	// const [owner, setOwner] = useState({});
	// const [requester, setRequester] = useState({});
	// const [book, setBook] = useState({});
    
    // useEffect(() => {
    //     setOwner(props.owner);
    //     setRequester(props.requester);
    //     setBook(props.book);
	// }, []);

    const handleStatusChange = (event) => {
        setStatus(event.target.value);
        console.log(event.target.value);
        console.log(id)
        console.log(owner)
        console.log(requester)
        console.log(book)
    };

    const handleUpdateRequest = (updatedRequest, id) => {
        console.log(id)
		updateRequest(updatedRequest, id);
		// setRequestsChange(requestsChange + 1);
	};
    
    const handleUpdateRequestSubmit = (event) => {
		event.preventDefault();
		const statusToSubmit = status;
		// const ownerToSubmit = owner
		// const requesterToSubmit = requester
		// const bookToSubmit = book

		if (
			!statusToSubmit
			// !ownerToSubmit ||
            // !requesterToSubmit ||
            // !bookToSubmit
		) {
			return;
		}

		handleUpdateRequest({
			status: statusToSubmit,
			owner: owner,
            requester: requester,
            book: book
		}, id);

        // setStatus('');
		
	};
    
    return(
        <>
        <form className="form">
			<label className="label" htmlFor="status">Update Status:</label>
            <select className="input" name="status" id="status" placeholder="choose status" onChange={handleStatusChange} required>
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