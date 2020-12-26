import Book from './Book';

const BookBar = ({ findBooks }) => {
	const showBooks = findBooks.map((book, i) => {
		return <Book key={i} book={book} />;
	});

	return (
		<>
			<h3>Fiction</h3>
			<ul>{showBooks}</ul>
		</>
	);
};

export default BookBar;
