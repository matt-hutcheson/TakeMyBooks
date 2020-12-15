import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
    return (
        <nav>
            <img src="./images/BookYeetLogo" alt="logo"></img>
            <li><Link to="/how-it-works">How it works</Link></li>
            <li><Link to="/my-books">My Books</Link></li>
            <li><Link to="/find-books">Find books</Link></li>
            <li><Link to="/new-user">New User</Link></li>
            <li><Link to="/share-books">Share books</Link></li>
        </nav>
    )
}

export default NavBar