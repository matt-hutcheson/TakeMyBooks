import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import NavBar from '../components/NavBar';
import NewUserBox from './pages/NewUserBox';
import FindBooksPage from './pages/FindBooksPage';

const AppContainer = () => {
	return (
		<Router>
			<>
				<NavBar />
				<Switch>
					<Route path="/sign-up" component={NewUserBox} />
					<Route exact path="/" component={Home} />
					{/* <Route path="/my-books" component={MyBooks}/> */}
					<Route path="/find-books" component={FindBooksPage} />
					{/* <Route component={ErrorPage}/> */}
				</Switch>
			</>
		</Router>
	);
};

export default AppContainer;
