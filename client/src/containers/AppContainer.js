import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {useState, useEffect} from 'react';
import {getUsers} from '../fetches/UserFetch';
import Home from '../components/Home';
import NavBar from '../components/NavBar';
import NewUserBox from './pages/NewUserBox';
import FindBooksPage from './pages/FindBooksPage';
import AddBook from '../components/addBookPage/AddBook';
import './AppContainer.css'

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
				<NavBar />
				<Switch>
					<Route path="/sign-up" component={NewUserBox} />
					<Route exact path="/" component={Home} />
					{/* <Route path="/my-books" component={MyBooks}/> */}
					<Route path="/find-books" component={FindBooksPage} />
					<Route path="/my-books/add-book" component={AddBook} />
					{/* <Route component={ErrorPage}/> */}
				</Switch>
			</main>
		</Router>
	);
};

export default AppContainer;
