import {useState, useEffect} from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import RequestList from '../../components/myRequestsPage/RequestList';
import { getRequestsByOwnerId, getRequestsByRequesterId } from '../../fetches/RequestFetch';

const MyRequestsPage = ({currentUser}) => {
    const [requestsShare, setRequestsShare] = useState([])
    const [requestsBorrow, setRequestsBorrow] = useState([])
    

    useEffect(() => {
        if(!currentUser){
		getRequestsByOwnerId(currentUser.id).then((data) => {
			setRequestsShare(data);
        });}
    }, [currentUser]);

    useEffect(()=>{
        if(!currentUser){
    getRequestsByRequesterId(currentUser.id).then((data) => {
        setRequestsBorrow(data);
    });}
    }, [currentUser]);

    return(
        <>
            <Header/>
            <h2>Books I'm Sharing:</h2>
            <RequestList currentUser={currentUser} requests={requestsShare}/>
            <h2>Books I'm Receiving:</h2>
            <RequestList currentUser={currentUser} requests={requestsBorrow}/>
            <Footer/>
        </>
    );
};

export default MyRequestsPage;