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


const AppContainer = () => {

	const [currentUser, setCurrentUser] = useState({});
	const [users, setUsers] = useState([]);

	// useEffect(() => {
	// 	getUsers()
	// 	.then(data => setUsers(data))
	// }, [])

	return (
		<Router>
			<>
				<NavBar />
				<Switch>
					<Route path="/sign-up" component={NewUserBox} />
					<Route exact path="/" component={Home}/>
					<Route exact path="/books" component={BookContainer} />
					<Route exact path="/book-detail" component={BookContainer} />	
					<Route path="/my-books" component={MyBooksContainer}/>
					<Route path="/find-books" component={FindBooksPage} />
					<Route path="/my-books/add-book" component={AddBook} />
					{/* <Route component={ErrorPage}/> */}
				</Switch>
			</>
		</Router>
	);
};

export default AppContainer;
