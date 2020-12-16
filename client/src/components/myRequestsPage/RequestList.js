import Request from '../../components/myRequestsPage/Request';

const RequestList = ({ currentUser, requests }) => {
	const showRequests = requests.map((request, i) => {
		return <Request key={i} request={request} currentUser={currentUser} />;
	});

	return (
		<>
			<ul>{showRequests}</ul>
		</>
	);
};

export default RequestList;