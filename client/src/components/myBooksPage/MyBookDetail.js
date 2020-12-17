import '../../styles/BookResult.css';

const MyBookDetail = ({ book }) => {
	return (
		<div className="book-result">
			<img src={book.image} alt="book cover" />

			<div className="overlay">
				<p className="text1">{book.title}</p>
				<p className="text2">by {book.author}.</p>
			</div>
		</div>
	);
};

export default MyBookDetail;
