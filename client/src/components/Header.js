import NavBar from './NavBar';
import '../styles/Header.css';

const Header = () => {
	return (
		<header>
			<div>
				<img src={'../images/BookYeetLogo.png'} alt={'logo'}></img>
			</div>
			<div>
			<ul className="header-list">
				<li>
					<a href="">Sign In</a>
				</li>
				<li>
					<a href="">Register</a>
				</li>
				<li>
					<a href="">About</a>
				</li>
			</ul>
			</div>
			<div>
			<img
				src={'../images/burger-menu.svg'}
				alt={'nav bar menu'}
				className="burger-image"
			/>
			</div>
			<NavBar />
		</header>
	);
};

export default Header;
