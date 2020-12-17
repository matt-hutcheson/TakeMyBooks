import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { getBooksById } from '/Users/andrewcarnaghan/Desktop/CodeClan/codeclan_work/projects/TakeMyBooks/client/src/fetches/BookFetch.js';
import '../../styles/BookResult.css';

const Book = ({ book, currentUser }) => {
	const [bookID, setBookID] = useState('');
	const [bookURL, setBookURL] = useState('');

	const isMounted = useRef(false);

	const handleBookClick = (event) => {
		event.preventDefault();
	};

	useEffect(() => {
		if (isMounted.current) {
			getBooksById(bookID);
		} else {
			isMounted.current = true;
		}
	}, [bookID]);

	return (
		<div className="book-result" onClick={handleBookClick}>
			<img src={book.image} alt="book cover" />
			<Link to="/book-detail">
				<div className="overlay">
					<p className="text1">{book.title}</p>
					<p className="text2">by {book.author}.</p>
					{Object.keys(currentUser).length === 0 &&
					currentUser.constructor === Object ? null : (
						<button className="request-btn">Request Book</button>
					)}
				</div>
			</Link>

			{/* <p className="book-genre">Genre: {book.genre}</p> */}
		</div>
	);
};

export default Book;
