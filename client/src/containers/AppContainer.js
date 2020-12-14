import NewUserBox from './NewUserBox';
import BookContainer from './BookContainer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const AppContainer = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/sign-up" component={NewUserBox} />
				<Route exact path="/books" component={BookContainer} />
				<Route exact path="/book-detail" component={BookContainer} />
			</Switch>
		</Router>
	);
};

export default AppContainer;
