import React from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<>
			<div className="home-div">
				<Link to="/how-it-works">
					<button>How it Works</button>
				</Link>
				<Link to="/find-books">
					<button>Find Books</button>
				</Link>
				<Link to="/share-books">
					<button>Share Books</button>
				</Link>
			</div>
		</>
	);
};

export default Home;
