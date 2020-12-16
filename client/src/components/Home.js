import React from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
const Home = () => {
	return (
		<>
			<div className="home-upper">
				<div className="home-main-text">
					<p>The libraries are dead.</p>
					<p>Long live the libraries.</p>
				</div>
				<div>
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

			<div className="home-btns">
				<button className="share-btn">
					<Link to="/share-books">Share books</Link>
				</button>

				<button className="find-btn">
					<Link to="/find-books">Find books</Link>
				</button>
			</div>

			<div className="home-lower-content">
				<div className="home-lower-img">
					<img
						className="img-content"
						src={'../images/home-image-lower1.jpg'}
						alt={'guy reading'}
					/>
				</div>
				<div className="home-lower-text">
					<p>We are driven by community.</p>
				</div>
			</div>
			<div className="home-lower-content">
				<div className="home-lower-text">
					<p>Get more from your books.</p>
				</div>
				<div className="home-lower-img2">
					<img
						className="img-content"
						src={'../images/home-image-lower2.jpg'}
						alt={'girl reading'}
					/>
				</div>
			</div>
		</>
	);
};

export default Home;
