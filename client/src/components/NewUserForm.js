import { useState, useEffect } from 'react';

const NewUserForm = ({ onNewUserSubmit }) => {
	const [username, setUsername] = useState('');
	const [userEmail, setUserEmail] = useState('');
	const [userPassword, setUserPassword] = useState('');
	const [userCommunity, setUserCommunity] = useState('');

	const handleUsernameChange = (event) => {
		setUsername(event.target.value);
	};

	const handleEmailChange = (event) => {
		setUserEmail(event.target.value);
	};

	const handlePasswordChange = (event) => {
		setUserPassword(event.target.value);
	};

	const handleCommunityChange = (event) => {
		setUserCommunity(event.target.value);
	};

	const handleNewUserSubmit = (event) => {
		event.preventDefault();
		const usernameToSubmit = username.trim();
		const userEmailToSubmit = userEmail.trim();
		const userPasswordToSubmit = userPassword.trim();
		const userCommunityToSubmit = userCommunity.trim();

		if (
			!usernameToSubmit ||
			!userEmailToSubmit ||
			!userPasswordToSubmit ||
			!userCommunityToSubmit
		) {
			return;
		}

		onNewUserSubmit({
			username: usernameToSubmit,
			userEmail: userEmailToSubmit,
			userPassword: userPasswordToSubmit,
			userCommunity: userCommunityToSubmit
		});

		setUsername('');
		setUserEmail('');
		setUserPassword('');
		setUserCommunity('');
	};

	return (
		<>
			<div>
				<form>
					<label for="username">Username:</label>
					<input
						type="text"
						placeholder="username"
						value={username}
						onChange={handleUsernameChange}
						required
					/>
					<label for="userEmail">Email:</label>
					<input
						type="text"
						placeholder="email"
						value={userEmail}
						onChange={handleEmailChange}
						required
					/>
					<label for="userPassword">Password:</label>
					<input
						type="password"
						placeholder="password"
						value={userPassword}
						onChange={handlePasswordChange}
						required
					/>
					<label for="userCommunity">Community:</label>
					<input
						type="text"
						placeholder="community"
						value={userCommunity}
						onChange={handleCommunityChange}
						required
					/>
					<input
						type="submit"
						value="Sign Up"
						onSubmit={handleNewUserSubmit}
					/>
				</form>
			</div>
		</>
	);
};

export default NewUserForm;
