import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SearchBar from '../../components/findBooksPage/SearchBar';
import FilterBar from '../../components/findBooksPage/FilterBar';
import BookBar from '../../components/findBooksPage/BookBar';

const FindBooksPage = () => {
	const [searchInput, setSearchInput] = useState('');

	const onSearchInputChange = (event) => {
		setSearchInput(event.target.value);
	};

	return (
		<>
			<Header />
			<SearchBar
				searchInput={searchInput}
				onSearchInputChange={onSearchInputChange}
			/>
			<FilterBar />
			<BookBar />
			<Footer />
		</>
	);
};

export default FindBooksPage;
