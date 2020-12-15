import {useState} from 'react'
import { getRequestsByOwnerId } from '../../fetches/RequestFetch';

const MyRequestsPage = () => {
    const [request, setRequest] = useState([])

    useEffect(() => {
		getRequestsByOwnerId().then((data) => {
			setRequests(data);
		});
    }, []);
    
    return(
        <h1 request={request}>Requests</h1>
    )
}