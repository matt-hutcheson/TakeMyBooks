import '../../styles/MyBooksUser.css';

const User = ({ userName, community, bookCount }) => {
	return (
		<>
			<div className="user-details">
				<p>Username: {userName}</p>
				<p>Community: {community}</p>
				<p>Numbers of books: {bookCount}</p>
			</div>
		</>
	);
};

export default User;
