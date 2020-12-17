import { useState } from 'react';
import {updateRequest} from '../../fetches/RequestFetch';
const RequestUpdate = ({props}) =>{

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

		props.handleUpdateSubmit({
			status: statusToSubmit,
			owner: props.owner,
            requester: props.requester,
            book: props.book
		});

        setStatus('');
		
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