import NavBar from './NavBar';
import '../styles/Header.css';

const Header = () => {
	return (
		<>
		<header>
			{/* <div> */}
			<a href="/"></a><img
				className="header-logo"
				src={'../images/BookYeetLogo.png'}
				alt={'logo'}
			></img>
			{/* </div> */}
			{/* <div> */}
			<ul className="header-list">
				<li>
					<a href="/login">Login</a>
				</li>
				<li>
					<a href="/about">About</a>
				</li>
				<li className="img-li">
					<img
						src={'../images/burger-menu.svg'}
						alt={'nav bar menu'}
						className="burger-image"
					/>
				</li>
			</ul>
			{/* </div> */}
			{/* <NavBar /> */}
		</header>
		<NavBar/>
		</>
	);
};

export default Header;
