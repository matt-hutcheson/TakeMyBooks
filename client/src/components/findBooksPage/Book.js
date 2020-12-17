import React, { useState } from 'react';
import '../../styles/BookResult.css';

const Book = ({ book }) => {
	return (
		<div className="book-result">
			<img src={book.image} alt="book cover" />
			<div className="overlay">
				<p className="text1">{book.title}</p>
				<p className="text2">by {book.author}.</p>
			</div>

			{/* <p className="book-genre">Genre: {book.genre}</p> */}
		</div>
	);
};

export default Book;
