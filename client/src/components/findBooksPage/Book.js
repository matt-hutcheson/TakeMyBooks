import React from 'react';

const Book = ({ book }) => (
	<div>
		<h3>Title: {book.title}</h3>
		<p>Author: {book.author}.</p>
		<p>Genre: {book.genre}</p>
		<img src={book.image} alt="book cover" />
	</div>
);

export default Book;
