import { useState } from 'react';

const NewUserForm = ({ onNewUserSubmit }) => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [userEmail, setUserEmail] = useState('');
	const [userCommunity, setUserCommunity] = useState('');

	const handleFirstNameChange = (event) => {
		setFirstName(event.target.value);
	};

	const handleLastNameChange = (event) => {
		setLastName(event.target.value);
	};

	const handleUserEmailChange = (event) => {
		setUserEmail(event.target.value);
	};

	const handleCommunityChange = (event) => {
		setUserCommunity(event.target.value);
	};

	const handleNewUserSubmit = (event) => {
		event.preventDefault();
		const firstNameToSubmit = firstName.trim();
		const lastNameToSubmit = lastName.trim();
		const userEmailToSubmit = userEmail.trim();
		const userCommunityToSubmit = userCommunity.trim();

		if (
			!firstNameToSubmit ||
			!lastNameToSubmit ||
			!userEmailToSubmit ||
			!userCommunityToSubmit
		) {
			return;
		}

		onNewUserSubmit({
			firstName: firstNameToSubmit,
			lastName: lastNameToSubmit,
			email: userEmailToSubmit,
			community: userCommunityToSubmit
		});

		setFirstName('');
		setLastName('');
		setUserEmail('');
		setUserCommunity('');
	};

	return (
		<>
			<div>
				<form>
					<label htmlFor="firstName">First Name:</label>
					<input
						type="text"
						placeholder="first name"
						value={firstName}
						onChange={handleFirstNameChange}
						required
					/>
					<label htmlFor="lastName">Last Name:</label>
					<input
						type="text"
						placeholder="last name"
						value={lastName}
						onChange={handleLastNameChange}
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
