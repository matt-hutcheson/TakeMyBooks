import Request from '../../components/myRequestsPage/Request';
import RequestDetail from './RequestDetail';

const RequestList = ({ currentUser, requests, handleSelectRequest }) => {

	const showRequests = requests.map((request, i) => {
		return <Request key={i} request={request} currentUser={currentUser} handleSelectRequest={handleSelectRequest} />;
	});

	return (
		<>
			<ul>{showRequests}</ul>
		</>
	);
};

export default RequestList;