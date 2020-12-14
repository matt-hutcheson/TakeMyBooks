import { useState, useEffect, useRef } from 'react';

const FilterBar = ({ findBooks }) => {
	const [filterWord, setFilterWord] = useState('');

	const onButtonClick = (event) => {
		event.preventDefault();
		setFilterWord(event.target.value);
	};

	const isFirstRun = useRef(true);

	useEffect(() => {
		if (isFirstRun.current) {
			isFirstRun.current = false;
			return;
		}

		findBooks(filterWord);
	}, [filterWord]);

	return (
		<>
			<h1>Filter Bar</h1>
			<button onClick={onButtonClick} value="fiction">
				Fiction
			</button>
			<button onClick={onButtonClick} value="non-fiction">
				Non Fiction
			</button>
			<button onClick={onButtonClick} value="childrens">
				Childrens
			</button>
			<button onClick={onButtonClick} value="textbook">
				Textbooks
			</button>
		</>
	);
};

export default FilterBar;
