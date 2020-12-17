import NavBar from './NavBar';
import '../styles/Header.css';

const Header = ({currentUser}) => {

	if (Object.keys(currentUser).length === 0 && currentUser.constructor === Object){
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
				</header>
				<NavBar />
			</>
		);
	} else {
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
						<a href="/login">Change User: {currentUser.userName}</a>
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
			</header>
			<NavBar />
		</>
	);
	}
};

export default Header;
