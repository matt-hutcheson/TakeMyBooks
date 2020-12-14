import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NewUserBox from './pages/NewUserBox';
import FindBooksPage from './pages/FindBooksPage';

const AppContainer = () => {
	return (
		<Router>
			<Switch>
				<Route path="/sign-up" component={NewUserBox} />
				<Route path="/find-books" component={FindBooksPage} />
			</Switch>
		</Router>
	);
};

export default AppContainer;
