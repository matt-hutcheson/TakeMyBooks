import NavBar from './NavBar';
import '../styles/Header.css';

const Header = () => {
	return (
		<>
			<header>
				<img
					className="header-logo"
					src={'../images/BookYeetLogo.png'}
					alt={'logo'}
				></img>
				<ul className="header-list">
					<li>
						<a href="">Login</a>
					</li>
					<li>
						<a href="">About</a>
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
			<NavBar />
		</>
	);
};

export default Header;
