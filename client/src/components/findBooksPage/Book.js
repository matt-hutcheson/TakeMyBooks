import React from 'react';

const Book = ({ book }) => (
	<li>
		<article>
			<h1>Title: {book.title}</h1>
			<p>Author: {book.author}.</p>
		</article>
	</li>
);

export default Book;
