import { useState, useEffect } from 'react';

const SearchBar = ({ findBooks }) => {
	const [searchInput, setSearchInput] = useState('');

	const onSearchInputChange = (event) => {
		event.preventDefault();
		setSearchInput(event.target.value);
	};

	useEffect(() => {
		findBooks(searchInput);
	}, [searchInput]);

	return (
		<>
			<h1>Search Bar</h1>
			<input type="text" onChange={onSearchInputChange} />
		</>
	);
};

export default SearchBar;
