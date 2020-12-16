import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

const NavBar = () => {
	return (
		<div className="HALP">
		<nav>
			<ul className="nav-bar-list">
				<li>
					<Link to="/" className="nav-list-link">
						home
					</Link>
				</li>
				<li>
					<Link to="/find-books" className="nav-list-link">
						find books
					</Link>
				</li>
				<li>
					<Link to="/my-books" className="nav-list-link">
						my books
					</Link>
				</li>
				<li>
					<Link to="/my-books/add-book" className="nav-list-link">
						add book
					</Link>
				</li>
				<li>
					<Link to="/my-requests" className="nav-list-link">
						my requests
					</Link>
				</li>
			</ul>
		</nav>
		</div>
	);
};

export default NavBar;
