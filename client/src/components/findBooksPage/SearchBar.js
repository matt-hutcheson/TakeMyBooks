import '../../styles/SearchBar.css';

const SearchBar = ({ setSearchInput }) => {
	const onSearchInputChange = (event) => {
		event.preventDefault();
		setSearchInput(event.target.value);
	};

	return (
		<div className="search-bar-div">
			<input
				type="text"
				onChange={onSearchInputChange}
				placeholder="title, author, genre, ISBN..."
			/>
		</div>
	);
};

export default SearchBar;
