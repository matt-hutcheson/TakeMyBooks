import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

const NavBar = () => {
<<<<<<< HEAD
    return (
        <nav>
            <img src="./images/BookYeetLogo" alt="logo"></img>
            <li><Link to="/how-it-works">How it works</Link></li>
            <li><Link to="/my-books">My Books</Link></li>
            <li><Link to="/find-books">Find books</Link></li>
            <li><Link to="/new-user">New User</Link></li>
            <li><Link to="/share-books">Share books</Link></li>
            <li><Link to="/my-requests">My Requests</Link></li>
            <li><Link to="/sign-up">Sign Up</Link></li>
        </nav>
    )
}
=======
	return (
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
					<Link to="/share-books" className="nav-list-link">
						share books
					</Link>
				</li>
				<li>
					<Link to="/my-books" className="nav-list-link">
						my books
					</Link>
				</li>
				<li>
					<Link to="/sign-up" className="nav-list-link">
						new user
					</Link>
				</li>
				<li>
					<Link to="/how-it-works" className="nav-list-link">
						how it works
					</Link>
				</li>
			</ul>
		</nav>
	);
};
>>>>>>> client

export default NavBar;
