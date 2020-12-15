import {useState} from 'react'
import Header from '../../components/Header';
import { getRequestsByOwnerId, getRequestsByRequesterId } from '../../fetches/RequestFetch';

const MyRequestsPage = ({currentUser}) => {
    const [requestShare, setRequestShare] = useState([])
    const [requestBorrow, setRequestBorrow] = useState([])

    useEffect(() => {
		getRequestsByOwnerId({currentUser}.id).then((data) => {
			setRequestsShare(data);
        });
        getRequestsByRequesterId({currentUser}.id).then((data) => {
            setRequestBorrow(data);
        });
    }, []);
    
    return(
        <>
            <Header/>
            <h2>Books I'm Sharing:</h2>
            <RequestList request={requestShare}/>
            <h2>Books I'm Receiving:</h2>
            <RequestList request={requestBorrow}/>
            <Footer/>
        </>
    );
};