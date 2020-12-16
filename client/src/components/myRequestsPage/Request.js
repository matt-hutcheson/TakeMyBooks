const Request = ({ currentUser, request, handleSelectRequest }) => {
	

	
	if(currentUser != null) {
	return(
		<li>
			<div>
				<h4>Title: {request.book.title}</h4>
				<p>Author: {request.book.author}.</p>
    	        <p>{currentUser.id===request.owner.id ? `Lending to ${request.requester.firstName} ${request.	requester.lastName}` : `Borrowing from ${request.owner.firstName} ${request.owner.lastName}`}</p>
				<button onClick={handleSelectRequest} value={JSON.stringify(request)}>View Details</button>
			</div>
		</li>
	)}
};

export default Request;