const SearchBar = ({ searchInput, onSearchInputChange }) => {
	return (
		<>
			<h1>Search Bar</h1>
			<input type="text" onChange={onSearchInputChange} />
		</>
	);
};

export default SearchBar;
