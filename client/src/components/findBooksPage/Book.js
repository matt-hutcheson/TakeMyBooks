import React, { useState } from 'react';
import '../../styles/BookResult.css';

const Book = ({ book }) => {
	// const [bookStatus, setBookStatus] = useState(false);

	// const handleBookHover = (event) => {
	// 	event.preventDefault();
	// 	setBookStatus(true);
	// };

	// const handleBookLeave = (event) => {
	// 	event.preventDefault();
	// 	setBookStatus(false);
	// };

	return (
		<div className="book-result">
			<img
				src={book.image}
				alt="book cover"
				// onMouseEnter={handleBookHover}
				// onMouseLeave={handleBookLeave}
			/>
			<div className="overlay">
				{/* {bookStatus ? (
					<> */}
				<p className="text1">{book.title}</p>
				<p className="text2">by {book.author}.</p>
				{/* </>
				) : null} */}
			</div>

			{/* <p className="book-genre">Genre: {book.genre}</p> */}
		</div>
	);
};

export default Book;
