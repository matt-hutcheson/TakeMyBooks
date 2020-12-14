import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SearchBar from '../../components/findBooksPage/SearchBar';
import FilterBar from '../../components/findBooksPage/FilterBar';
import BookBar from '../../components/findBooksPage/BookBar';

const FindBooksPage = () => {
	const [searchInput, setSearchInput] = useState('');

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

	const onSearchInputChange = (event) => {
		event.preventDefault();
		setSearchInput(event.target.value);
	};

	return (
		<>
			<Header />
			<SearchBar
				books={books}
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
