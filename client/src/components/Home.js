import React from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
const Home = () => {
	return (
		<>
			<div className="home-container">
				<div className="home-upper">
					<div className="home-main-text">
						<p>The libraries are dead.</p>
						<p>Long live the libraries.</p>
					</div>
					<div className="home-upper-btn">
						<button className="btn-how-it-works">
							<Link to="/how-it-works">How it Works</Link>
						</button>
					</div>
					<div>
						<img
							className="img-down-arrow"
							src={'../images/down-arrow.svg'}
							alt={'down arrow'}
						/>
					</div>
				</div>
				<div className="home-lower">
					<div>
						<button>
							<Link to="/share-books">Share a Book</Link>
						</button>
					</div>
					<button>
						<Link to="/find-books">Find a Book</Link>
					</button>
				</div>
			</div>
		</>
	);
};

export default Home;
