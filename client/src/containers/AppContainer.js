// import NewUserBox from './NewUserBox';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "../components/Home";
import NavBar from '../components/NavBar'
import './AppContainer.css'


const AppContainer = () => {
	return (
		<Router>
			<main>
				<NavBar/>
				<Switch>
					<Route exact path="/" component={Home}/>
					{/* <Route path="/sign-up" component={NewUserBox} /> */}
					{/* <Route path="/my-books" component={MyBooks}/> */}
					{/* <Route path="/find-books" component={FindBooks}/> */}
					{/* <Route component={ErrorPage}/> */}
				</Switch>
			</main>
		</Router>
);
	
};

export default AppContainer;
