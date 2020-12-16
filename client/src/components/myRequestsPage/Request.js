const Request = ({ currentUser, request }) => (
	<li>
		<div>
			<h4>Title: {request.book.title}</h4>
			<p>Author: {request.book.author}.</p>
            <p>{currentUser.id==request.book.owner.id ? `Lending to ${request.requester.firstName} ${request.requester.lastName}` : `Borowing from ${request.owner.firstName} ${request.owner.lastName}`}</p>
		</div>
	</li>
);

export default Request;