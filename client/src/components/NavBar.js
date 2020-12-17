import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

const NavBar = () => {
	return (
		<>
			{/* // <ul className="nav-bar-list">
		// 	<li> */}
			<Link to="/" className="nav-list-link">
				Home
			</Link>
			{/* // </li>
			// <li> */}
			<Link to="/find-books" className="nav-list-link">
				Find books
			</Link>
			{/* // </li>
			// <li> */}
			<Link to="/my-books" className="nav-list-link">
				My books
			</Link>
			{/* // </li>
			// <li> */}
			<Link to="/my-books/add-book" className="nav-list-link">
				Add book
			</Link>
			{/* </li>
			<li> */}
			<Link to="/my-requests" className="nav-list-link">
				My requests
			</Link>
			{/* </li>
		</ul> */}
		</>
	);
};

export default NavBar;
