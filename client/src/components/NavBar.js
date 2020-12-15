import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<nav>
			<li>
				<Link to="/how-it-works">How it works</Link>
			</li>
			<li>
				<Link to="/my-books">My Books</Link>
			</li>
			<li>
				<Link to="/find-books">Find books</Link>
			</li>
			<li>
				<Link to="/new-user">New User</Link>
			</li>
			<li>
				<Link to="/share-books">Share books</Link>
			</li>
		</nav>
	);
};

export default NavBar;
