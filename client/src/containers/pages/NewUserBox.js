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
			<div>
			<select className="select-user" defaultValue="0" onChange={handleSelectUser}>
				<option value="0" disabled="disabled">Please select your username</option>
				{users.map((user, index) => {
					return <option key={index} value={JSON.stringify(user)} >{user.userName}</option>
				})}
			</select>
			</div>
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
				<div className="select-div">
					<div>
						<h2 className="question">Signed Up Before?</h2>
					</div>
					<div className="log-in-btns">
						<button className="yes-btn" onClick={handleYesClick}>YES</button>
						<button className="no-btn" onClick={handleNoClick}>NO</button>
					</div>
				</div>
				</>
			);
		} else if (showSelect === true) {
			return (
				<>
				<div className="select-div">
					<div>
						<h2 className="question">Select your name below:</h2>
					</div>
					<div className="show-users">{showAllUsers()}</div>
					<Link to="/my-books"><button className="yes-btn" onClick={handleSelectClick}>
						Select
					</button></Link>
				</div>
				</>
			);
		} else {
			return (
					<NewUserForm
						onNewUserSubmit={(newUser) => {
							addNewUser(newUser);
						}}
					/>
			);
		}
	};

	return (
		<>
			{renderItems()}
		</>
	);
};

export default NewUserBox;
