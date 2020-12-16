import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
    return (
        <nav>
            <img src="./images/BookYeetLogo.png" alt="logo"></img>
            <li><Link to="/">home</Link></li>
            <li><Link to="/find-books">find books</Link></li>
            <li><Link to="/share-books">share books</Link></li>
            <li><Link to="/my-books">my books</Link></li>
            <li><Link to="/new-user">new user</Link></li>
            <li><Link to="/how-it-works">how it works</Link></li>
        </nav>
    )
}

export default NavBar;
