import { useState, useEffect } from 'react';
import NewUserForm from '../../components/signUpPage/NewUserForm';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { getUsers, postUser } from '../../fetches/UserFetch';

const NewUserBox = () => {
	const [users, setUsers] = useState([]);
	const [userChange, setUserChange] = useState(0);
	const [showSignUp, setShowSignUp] = useState(false);
	const [showSelect, setShowSelect] = useState(false);

	const addNewUser = (newUser) => {
		// POSTS IT TO BACKEND API & REDIRECTS TO SEARCH PAGE OR MY BOOKS PAGE
		postUser(newUser);
		setUserChange(userChange + 1);
	};

	const showAllUsers = users.map((user, index) => {
		return (
			<div key={index}>
				<h6>
					Name: {user.firstName}&nbsp;{user.lastName}
				</h6>
				<h6>Community: {user.community}</h6>
				<h6>Email: {user.email}</h6> |
			</div>
		);
	});

	useEffect(() => {
		getUsers().then((data) => setUsers(data));
	}, [userChange]);

	const handleYesClick = () => {
		setShowSelect(true);
		setShowSignUp(false);
	};

	const handleNoClick = () => {
		setShowSignUp(true);
		setShowSelect(false);
	};

	const renderItems = () => {
		if (showSelect === false && showSignUp === false) {
			return (
				<>
					<div>
						<h2>Signed Up Before?</h2>
					</div>
					<div>
						<button onClick={handleYesClick}>YES</button>
						<button onClick={handleNoClick}>NO</button>
					</div>
				</>
			);
		} else if (showSelect === true) {
			return (
				<>
					<div>
						<h2>Click your name below:</h2>
					</div>
					<div>{showAllUsers}</div>
				</>
			);
		} else {
			return (
				<div>
					<NewUserForm
						onNewUserSubmit={(newUser) => {
							addNewUser(newUser);
						}}
					/>
				</div>
			);
		}
	};

	return (
		<>
			<Header />
			<div>{renderItems()}</div>
			<Footer />
		</>
	);
};

export default NewUserBox;
