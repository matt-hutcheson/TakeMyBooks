import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import User from './User';
import '../../styles/MyBooksUserDetail.css';

const UserDetail = ({ currentUser }) => {
	const [noBooks, setNoBooks] = useState(0);
	const [noRequests, setNoRequests] = useState(0);

	const calcBooks = () => {
		if (Object.keys(currentUser).length > 0) {
			setNoBooks(currentUser.shareBooks.length);
		}
	};

	// const calcRequests = () => {
	//     if (Object.keys(currentUser).length > 0){
	//         setNoRequests(
	//             if ((currentUser.requests.filter(({status}) => status === "Pending")).length > 0) {
	//                 currentUser.requests.filter(({status}) => status === "Pending").reduce((sum, request) => sum + 1)
	//             });
	//     }
	// }

	useEffect(() => {
		if (Object.keys(currentUser).length > 0) {
			calcBooks();
		}
		// calcRequests();
	}, [currentUser]);

	return (
		<article className="my-details-article">
			<div className="my-details-div">
				<p className="my-details-title">My details:</p>
				<User
					userName={currentUser.userName}
					community={currentUser.community}
					bookCount={noBooks}
				/>
				<div className="add-book-btn-div">
					<Link to="/my-books/add-book">
						<button className="add-book-btn">Add book</button>
					</Link>
				</div>
			</div>
		</article>
	);
};

export default UserDetail;
