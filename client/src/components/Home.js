import React from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<>
			<article>
				<h1>Home</h1>
				{/* <p>Welcome to Book Yeet!</p>
            <p>We are driven by Community</p>
            <p>Get more from your books</p> */}
				<div>
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
			</article>
		</>
	);
};

export default Home;
