import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

const NavBar = () => {
	return (
		<>
			<Link to="/" className="nav-list-link">
				Home
			</Link>
			<Link to="/find-books" className="nav-list-link">
				Find books
			</Link>
			<Link to="/my-books" className="nav-list-link">
				My books
			</Link>
			<Link to="/my-books/add-book" className="nav-list-link">
				Add book
			</Link>
			<Link to="/my-requests" className="nav-list-link">
				My requests
			</Link>
		</>
	);
};

export default NavBar;
