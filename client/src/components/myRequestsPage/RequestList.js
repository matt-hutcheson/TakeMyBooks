import Request from '../../components/myRequestsPage/Request';
import RequestDetail from './RequestDetail';
import '../../styles/RequestList.css';

const RequestList = ({ currentUser, requests, handleSelectRequest }) => {

	const showRequests = requests.map((request, i) => {
		return <Request key={i} request={request} currentUser={currentUser} handleSelectRequest={handleSelectRequest} />;
	});

	return (
		<>
			<ul className="reqUl">{showRequests}</ul>
		</>
	);
};

export default RequestList;
