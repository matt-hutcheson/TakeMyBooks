import MyBookDetail from './MyBookDetail';
import Book from '../findBooksPage/Book';
import '../../styles/MyBookList.css';

const MyBookList = ({ myBooks }) => {
	if (!myBooks) {
		return <p>loading</p>;
	}

	const bookElement = myBooks.map((book, index) => {
		return <MyBookDetail key={index} book={book} />;
	});

	return (
		<div className="my-books-list-div">
			<p id="my-books-title">My books</p>
			<div className="my-books-grid">
				<div>{bookElement}</div>
			</div>
		</div>
	);
};

export default MyBookList;
