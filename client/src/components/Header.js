import NavBar from './NavBar';
import '../styles/Header.css';

const Header = () => {
	return (
		<>
			<header>
				<a href="/">
					<img
						className="header-logo"
						src={'../images/BookYeetLogo.png'}
						alt={'logo'}
					></img>
				</a>
				<ul className="header-list">
					<li>
						<a href="/login">Login</a>
					</li>
					<li>
						<a href="/about">How it works</a>
					</li>
					<li className="img-li">
						<img
							src={'../images/burger-menu.svg'}
							alt={'nav bar menu'}
							className="burger-image"
						/>
					</li>
				</ul>
			</header>
			{/* <NavBar /> */}
		</>
	);
};

export default Header;
