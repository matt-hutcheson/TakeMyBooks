import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SearchBar from '../../components/findBooksPage/SearchBar';
import FilterBar from '../../components/findBooksPage/FilterBar';
import SearchResults from '../../components/findBooksPage/SearchResults';
import BookBar from '../../components/findBooksPage/BookBar';
import { getBooks } from '../../fetches/BookFetch';
import { getBooksByTitleOrAuthorOrGenreSearch } from '../../fetches/BookFetch';

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
		if (searchInput != null || searchInput == ""){
			getBooksByTitleOrAuthorOrGenreSearch(searchInput).then((data) => {
				setFoundBooks(data)
				console.log(searchInput)
				console.log(foundBooks)
			})
		} else {
			setFoundBooks(books);
		}
	}, [searchInput])

	// const findBooksBySearchBar = (searchInput) => {
	// 	const lowerInput = searchInput.toLowerCase().trim();

	// 	const foundBooksByTitle = books.filter((book) => {
	// 		return book.title.toLowerCase().indexOf(lowerInput) >= 0;
	// 	});

	// 	setFoundBooks(foundBooksByTitle);
	// };

	// const findBooksByFilterBar = (filterWord) => {
	// 	if (!filterWord) {
	// 		setFoundBooks(books);
	// 	} else {
	// 		const foundBooksByFilterWord = books.filter((book) => {
	// 			return book.genre.some((genre) => genre === filterWord);
	// 		});

	// 		setFoundBooks(foundBooksByFilterWord);
	// 	}
	// };

	// const findFictionBooks = books.filter((book) => {
	// 	return book.genre.some((genre) => genre === 'fiction');
	// });

	return (
		<>
			<SearchBar setSearchInput={setSearchInput} />
			{/* <FilterBar findBooks={findBooksByFilterBar} /> */}
			<SearchResults books={foundBooks} />
			{/* <BookBar findBooks={findFictionBooks} /> */}
		</>
	);
};

export default FindBooksPage;
