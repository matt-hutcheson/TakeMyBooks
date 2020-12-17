import React from 'react';

const Book = ({ book }) => (
	<li>
		<article>
			<h3>Title: {book.title}</h3>
			<p>Author: {book.author}.</p>
			<p>Genre: { book.genre }</p>
      <img src={book.image} alt="book cover"/>
		</article>
	</li>
);

export default Book;
