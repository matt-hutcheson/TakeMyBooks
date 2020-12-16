import { useState } from 'react';

const NewUserForm = ({ onNewUserSubmit }) => {
	const [userName, setUserName] = useState('');
	const [lastName, setLastName] = useState('');
	const [userEmail, setUserEmail] = useState('');
	const [userCommunity, setUserCommunity] = useState('');

	const handleUserNameChange = (event) => {
		setUserName(event.target.value);
	};

	const handleUserEmailChange = (event) => {
		setUserEmail(event.target.value);
	};

	const handleCommunityChange = (event) => {
		setUserCommunity(event.target.value);
	};

	const handleNewUserSubmit = (event) => {
		event.preventDefault();
		const userNameToSubmit = userName.trim();
		const userEmailToSubmit = userEmail.trim();
		const userCommunityToSubmit = userCommunity.trim();

		if (
			!userNameToSubmit ||
			!userEmailToSubmit ||
			!userCommunityToSubmit
		) {
			return;
		}

		onNewUserSubmit({
			userName: userNameToSubmit,
			email: userEmailToSubmit,
			community: userCommunityToSubmit
		});

		setUserName('');
		setUserEmail('');
		setUserCommunity('');
	};

	return (
		<>
			<div>
				<form>
					<label htmlFor="userName">Username:</label>
					<input
						type="text"
						placeholder="username"
						value={userName}
						onChange={handleUserNameChange}
						required
					/>
					<label htmlFor="userEmail">Email:</label>
					<input
						type="text"
						placeholder="email"
						value={userEmail}
						onChange={handleUserEmailChange}
						required
					/>
					<label htmlFor="userCommunity">Community:</label>
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
						onClick={handleNewUserSubmit}
					/>
				</form>
			</div>
		</>
	);
};

export default NewUserForm;
