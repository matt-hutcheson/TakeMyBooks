import NewUserBox from './NewUserBox';
import BookContainer from './BookContainer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "../components/Home";
import NavBar from '../components/NavBar'


const AppContainer = () => {
	return (
		<Router>
			<>
				<NavBar/>
				<Switch>
					{/* <Route path="/sign-up" component={NewUserBox} /> */}
					<Route exact path="/" component={Home}/>
					<Route exact path="/books" component={BookContainer} />
					<Route exact path="/book-detail" component={BookContainer} />	
					{/* <Route path="/my-books" component={MyBooks}/> */}
					{/* <Route path="/find-books" component={FindBooks}/> */}
					{/* <Route component={ErrorPage}/> */}
				</Switch>
			</>
		</Router>
);
	
};

export default AppContainer;
