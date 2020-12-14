import { useState, useEffect } from 'react';

const SearchBar = ({ books, searchInput, onSearchInputChange }) => {
	const [foundBooks, setFoundBooks] = useState([]);

	const findBooks = (searchInput) => {
		const lowerInput = searchInput.toLowerCase();

		const foundBooksByTitle = books.filter((book) => {
			return book.title.toLowerCase().indexOf(lowerInput) >= 0;
		});

		const foundBooksByAuthor = books.filter((book) => {
			return book.author.toLowerCase().indexOf(lowerInput) >= 0;
		});

		const foundBooksByGenre = books.filter((book) => {
			return book.Genre.toLowerCase().indexOf(lowerInput) >= 0;
		});

		const foundBooksByISBN = books.filter((book) => {
			return book.ISBN.indexOf(lowerInput) >= 0;
		});

		setFoundBooks([
			...foundBooks,
			foundBooksByTitle,
			foundBooksByAuthor,
			foundBooksByGenre,
			foundBooksByISBN
		]);
	};

	useEffect(() => {
		onSearchInputChange(searchInput);
	}, [searchInput]);

	return (
		<>
			<h1>Search Bar</h1>
			<input type="text" onChange={onSearchInputChange} />
		</>
	);
};

export default SearchBar;
