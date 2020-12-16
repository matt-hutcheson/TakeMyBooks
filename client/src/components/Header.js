import NavBar from './NavBar';
import '../styles/Header.css';

const Header = () => {
	return (
		<>
		<header>
			<div>
				<img src={'../images/BookYeetLogo.png'} alt={'logo'}></img>
			</div>
			<ul>
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
			<img
				src={'../images/burger-menu.svg'}
				alt={'nav bar menu'}
				className="burger-image"
			/>
			{/* <NavBar /> */}
		</header>
		<NavBar/>
		</>
	);
};

export default Header;
