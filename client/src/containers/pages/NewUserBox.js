import { useState, useEffect } from 'react';
import NewUserForm from '../../components/signUpPage/NewUserForm';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { getUsers, postUser } from '../../fetches/UserFetch';
import { Link } from 'react-router-dom';
import '../../styles/NewUserBox.css'

const NewUserBox = ({setCurrentUser}) => {
	const [users, setUsers] = useState([]);
	const [userChange, setUserChange] = useState(0);
	const [showSignUp, setShowSignUp] = useState(false);
	const [showSelect, setShowSelect] = useState(false);
	const [selectedUser, setSelectedUser] = useState({})

	const addNewUser = (newUser) => {
		// POSTS IT TO BACKEND API & REDIRECTS TO SEARCH PAGE OR MY BOOKS PAGE
		postUser(newUser);
		setUserChange(userChange + 1);
	};

	const showAllUsers = () => {
		return (
			<select defaultValue="0" onChange={handleSelectUser}>
				<option value="0" disabled="disabled">Please select your username</option>
				{users.map((user, index) => {
					return <option key={index} value={JSON.stringify(user)} >{user.userName}</option>
				})}
			</select>
		);
	};


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

	const handleSelectUser = (event) => {
		event.preventDefault();
		setSelectedUser(JSON.parse(event.target.value));
	};

	const handleSelectClick = () => {
		setCurrentUser(selectedUser);
	};

	const renderItems = () => {
		if (showSelect === false && showSignUp === false) {
			return (
				<>
					<div>
						<h2 className="question">Signed Up Before?</h2>
					</div>
					<div className="button">
						<button onClick={handleYesClick}>YES</button>
						<button onClick={handleNoClick}>NO</button>
					</div>
				</>
			);
		} else if (showSelect === true) {
			return (
				<>
					<div>
						<h2 className="question">Select your name below:</h2>
					</div>
					<div className="show-users">{showAllUsers()}</div>
					<button className="" onClick={handleSelectClick}>
						<Link to="/">Select</Link>
					</button>
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
			<div>{renderItems()}</div>
		</>
	);
};

export default NewUserBox;
