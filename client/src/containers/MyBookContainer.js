import MyBookList from '../components/myBooksPage/MyBookList';
import UserDetail from '../components/myBooksPage/UserDetail';
import { useEffect, useState } from 'react';
import { getBooksByOwnerId } from '../fetches/BookFetch';

import '../styles/MyBookContainer.css';

const MyBookContainer = ({ currentUser }) => {
	const [myBooks, setMyBooks] = useState([]);

	useEffect(() => {
		if (Object.keys(currentUser).length > 0) {
			setMyBooks(currentUser.shareBooks);
		}
	}, [currentUser]);

	if (
		Object.keys(currentUser).length === 0 &&
		currentUser.constructor === Object
	) {
		return <p>Please login to continue</p>;
	} else {
		return (
			<div className="my-books-container">
				<div className="my-books-child">
					<UserDetail currentUser={currentUser} />
					<MyBookList myBooks={myBooks} />
				</div>
			</div>
		);
	}
};

export default MyBookContainer;
