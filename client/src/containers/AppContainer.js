import BookContainer from './BookContainer';
import MyBooksContainer from './MyBookContainer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getUsers, getUsersById } from '../fetches/UserFetch';
import Home from '../components/Home';
import NavBar from '../components/NavBar';
import NewUserBox from './pages/NewUserBox';
import FindBooksPage from './pages/FindBooksPage';
import AddBook from '../components/addBookPage/AddBook';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/AppContainer.css';
import MyRequestsPage from '../containers/pages/MyRequestsPage';

const AppContainer = () => {
	const [currentUser, setCurrentUser] = useState({});
	// const [users, setUsers] = useState([]);

	// useEffect(() => {
	// 	getUsers()
	// 	.then(data => setUsers(data))
	// }, [])

	const handleSelectUser = (event) => {
		event.preventDefault();
		setCurrentUser(JSON.parse(event.target.value));
	};

	return (
		<Router>
			<Header />
			<main>
				{/* <NavBar /> */}
				<Switch>
					<Route
						path="/sign-up"
						exact
						render={() => (
							<NewUserBox handleSelectUser={handleSelectUser} />
						)}
					/>
					<Route exact path="/" component={Home} />
					<Route exact path="/books" component={BookContainer} />
					<Route
						exact
						path="/book-detail"
						render={() => <BookContainer currentUser={currentUser} />}
					/>
					<Route
						exact
						path="/my-books"
						render={() => <MyBooksContainer currentUser={currentUser} />}
					/>
					<Route exact path="/find-books" component={FindBooksPage} />
					<Route
						path="/users/:id/books/add-book"
						exact
						render={() => <AddBook currentUser={currentUser} />}
					/>
					<Route
						path="/my-requests"
						exact
						render={() => (
							<MyRequestsPage currentUser={currentUser} />
						)}
					/>
					{/* <Route component={ErrorPage}/> */}
				</Switch>
			</main>
			<Footer />
		</Router>
	);
};

export default AppContainer;
