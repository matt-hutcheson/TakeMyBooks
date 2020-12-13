import NewUserBox from './NewUserBox';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const AppContainer = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/sign-up" component={NewUserBox} />
			</Switch>
		</Router>
	);
};

export default AppContainer;
