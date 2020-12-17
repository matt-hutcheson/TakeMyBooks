import { useState, useEffect } from 'react';

const SearchBar = ({ setSearchInput }) => {

	const onSearchInputChange = (event) => {
		event.preventDefault();
		setSearchInput(event.target.value);
	};

	return (
		<>
			<h1>Search Bar</h1>
			<input type="text" onChange={onSearchInputChange} />
		</>
	);
};

export default SearchBar;
