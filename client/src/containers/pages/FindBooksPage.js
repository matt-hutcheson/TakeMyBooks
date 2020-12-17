import { useEffect, useState } from 'react';
import SearchBar from '../../components/findBooksPage/SearchBar';
import SearchResults from '../../components/findBooksPage/SearchResults';
import { getBooks } from '../../fetches/BookFetch';
import { getBooksByTitleOrAuthorOrGenreSearch } from '../../fetches/BookFetch';
import '../../styles/FindBooks.css';

const FindBooksPage = () => {
	const [books, setBooks] = useState([]);
	const [foundBooks, setFoundBooks] = useState([]);
	const [searchInput, setSearchInput] = useState('');

	useEffect(() => {
		getBooks().then((data) => {
			setBooks(data);
			setFoundBooks(data);
		});
	}, []);

	useEffect(() => {
		if (searchInput != null || searchInput == '') {
			getBooksByTitleOrAuthorOrGenreSearch(searchInput).then((data) => {
				setFoundBooks(data);
			});
		} else {
			setFoundBooks(books);
		}
	}, [searchInput]);

	return (
		<div className="find-books-container">
			<div className="find-books-child">
				<SearchBar setSearchInput={setSearchInput} />
				<SearchResults books={foundBooks} />
			</div>
		</div>
	);
};

export default FindBooksPage;
