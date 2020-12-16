import BookContainer from './BookContainer'
import MyBooksContainer from './MyBookContainer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {useState, useEffect} from 'react';
import {getUsers} from '../fetches/UserFetch';
import Home from '../components/Home';
import NavBar from '../components/NavBar';
import NewUserBox from './pages/NewUserBox';
import FindBooksPage from './pages/FindBooksPage';
import AddBook from '../components/addBookPage/AddBook';
import './AppContainer.css'
import Header from '../components/Header';
import Footer from '../components/Footer';

const AppContainer = () => {

	const [currentUser, setCurrentUser] = useState({});
	const [users, setUsers] = useState([]);

	// useEffect(() => {
	// 	getUsers()
	// 	.then(data => setUsers(data))
	// }, [])

	return (
		<Router>
			<main>
				<Header/>
				{/* <NavBar /> */}
				<Switch>
					<Route path="/sign-up" component={NewUserBox} />
					<Route exact path="/" component={Home}/>
					<Route exact path="/books" component={BookContainer} />
					<Route exact path="/book-detail" component={BookContainer} />
					<Route exact path="/my-books" component={MyBooksContainer}/>
					<Route exact path="/find-books" component={FindBooksPage} />
					<Route path="/users/:id/books/add-book" exact render={() => <AddBook currentUser="currentUser" />} />
					{/* <Route component={ErrorPage}/> */}
				</Switch>
				<Footer/>
			</main>
		</Router>
	);
};

export default AppContainer;
