import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { postRequest } from '../../fetches/RequestFetch.js';
import '../../styles/BookResult.css';

const Book = ({ book, currentUser }) => {
	const [request, setRequest] = useState({});
	const isMounted = useRef(false);

	const handleBookRequestClick = (event) => {
		event.preventDefault();

		const createRequest = {
			status: 'Pending',
			owner: book.owner,
			requester: currentUser,
			book: book
		};
		setRequest(createRequest);
	};

	useEffect(() => {
		if (isMounted.current) {
			postRequest(request);
		} else {
			isMounted.current = true;
		}
	}, [request]);

	return (
		<div className="book-result">
			<img src={book.image} alt="book cover" />

			<div className="overlay">
				<p className="text1">{book.title}</p>
				<p className="text2">by {book.author}.</p>

				{Object.keys(currentUser).length === 0 &&
				currentUser.constructor === Object ? null : (
					<button
						className="request-btn"
						onClick={handleBookRequestClick}
					>
						Request Book from {book.owner.userName}
					</button>
				)}
			</div>
		</div>
	);
};

export default Book;
