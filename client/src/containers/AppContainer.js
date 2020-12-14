import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NewUserBox from './NewUserBox';
import FindBooksPage from './FindBooksPage';

const AppContainer = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/sign-up" component={NewUserBox} />
				<Route path="/find-books" component={FindBooksPage} />
			</Switch>
		</Router>
	);
};

export default AppContainer;
