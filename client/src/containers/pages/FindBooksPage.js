import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SearchBar from '../../components/findBooksPage/SearchBar';
import FilterBar from '../../components/findBooksPage/FilterBar';
import SearchResults from '../../components/findBooksPage/SearchResults';
import BookBar from '../../components/findBooksPage/BookBar';

const FindBooksPage = () => {
	const books = [
		{
			title: 'LW&W',
			author: 'CS Lewis',
			ISBN: 123456789,
			genre: ['fantasy', 'fiction', 'childrens']
		},
		{
			title: 'Bible',
			author: 'Various',
			ISBN: 987654321,
			genre: ['religious', 'non-fiction']
		},
		{
			title: '1984',
			author: 'George Orwell',
			ISBN: 132423433,
			genre: ['fiction']
		}
	];

	const [foundBooks, setFoundBooks] = useState([]);

	const findBooksBySearchBar = (searchInput) => {
		const lowerInput = searchInput.toLowerCase().trim();

		const foundBooksByTitle = books.filter((book) => {
			return book.title.toLowerCase().indexOf(lowerInput) >= 0;
		});

		setFoundBooks(foundBooksByTitle);
	};

	const findBooksByFilterBar = (filterWord) => {
		const foundBooksByFilterWord = books.filter((book) => {
			return book.genre.some((genre) => genre === filterWord);
		});

		setFoundBooks(foundBooksByFilterWord);
	};

	return (
		<>
			<Header />
			<SearchBar findBooks={findBooksBySearchBar} />
			<FilterBar findBooks={findBooksByFilterBar} />
			<SearchResults books={foundBooks} />
			<BookBar />
			<Footer />
		</>
	);
};

export default FindBooksPage;
