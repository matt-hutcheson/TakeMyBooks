import { useState } from 'react';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = ({ currentUser }) => {
	const [burgerClicked, setBurgerClicked] = useState(false);

	const handleBurgerHover = (event) => {
		event.preventDefault();
		setBurgerClicked(true);
	};

	const handleBurgerLeave = (event) => {
		event.preventDefault();
		setBurgerClicked(false);
	};

	if (
		Object.keys(currentUser).length === 0 &&
		currentUser.constructor === Object
	) {
		return (
			<>
				<header>
					<Link to="/">
						<img
							className="header-logo"
							src={'../images/BookYeetLogo.png'}
							alt={'logo'}
						></img>
					</Link>
					<ul className="header-list">
						<li>
              <a href="/login" className="header-link1">
                Login
              </a>
						</li>
						<li>
						  <Link to="/"><p>About</p></Link>
						</li>
						<li
							className="img-li"
							onMouseEnter={handleBurgerHover}
							onMouseLeave={handleBurgerLeave}
						>
							<img
								src={'../images/burger-menu.svg'}
								alt={'nav bar menu'}
								className="burger-image"
							/>
							<div>{burgerClicked ? <NavBar /> : null}</div>
						</li>
					</ul>
				</header>
			</>
		);
	} else {
		return (
			<header>
				<Link to="/">
          <img
            className="header-logo"
            src={'../images/BookYeetLogo.png'}
            alt={'logo'}
          ></img>
					</a>
					<ul className="header-list">
						<li>
							<a href="/login" className="header-link1">
								Change User: {currentUser.userName}
							</a>
						</li>
						<li
							className="img-li"
							onMouseEnter={handleBurgerHover}
							onMouseLeave={handleBurgerLeave}
						>
							<img
								src={'../images/burger-menu.svg'}
								alt={'nav bar menu'}
								className="burger-image"
							></img>
							<div>{burgerClicked ? <NavBar /> : null}</div>
						</li>
					</ul>
				</header>
			</>
		);
	}
};

export default Header;
