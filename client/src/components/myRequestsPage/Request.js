import '../../styles/Request.css';

const Request = ({ currentUser, request, handleSelectRequest }) => {



	if(currentUser != null) {
	return(
		<li className={`reqLi ${request.status}`}>
			<h4>Title: {request.book.title}</h4>
			<p>Author: {request.book.author}.</p>
						<p>{currentUser.id===request.owner.id ? `Lending to: ${request.requester.userName}` : ` Borrowing from: ${request.owner.userName}`}</p>
			<p>Current status of swap: {request.status}</p>
			<div className="reqButtonCenter">
				<button className={`view-request-button button${request.status}`} onClick={handleSelectRequest} value={JSON.stringify(request)}>View Details</button>
			</div>
		</li>
	)}
};

export default Request;
