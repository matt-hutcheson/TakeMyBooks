const Request = ({ currentUser, request, handleSelectRequest }) => {



	if(currentUser != null) {
	return(
		<li>
			<div>
				<h4>Title: {request.book.title}</h4>
				<p>Author: {request.book.author}.</p>
    	        <p>{currentUser.id===request.owner.id ? `Lending to ${request.requester.userName}` : ` Borrowing from ${request.owner.userName}`}</p>
				<p>Current status of swap: {request.status}</p>
				<button onClick={handleSelectRequest} value={JSON.stringify(request)}>View Details</button>
			</div>
		</li>
	)}
};

export default Request;
