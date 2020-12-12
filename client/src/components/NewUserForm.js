import { useState, useEffect } from 'react';

const NewUserForm = () => {
	const [username, setUsername] = useState('');
	const [userEmail, setUserEmail] = useState('');
	const [userPassword, setUserPassword] = useState('');
	const [userCommunity, setUserCommunity] = useState('');

	return (
		<>
			<div>
				<form>
					<input
						type="text"
						placeholder="username"
						value={username}
					/>
					<input type="text" placeholder="email" value={userEmail} />
					<input
						type="password"
						placeholder="password"
						value={userPassword}
					/>
					<input
						type="text"
						placeholder="community"
						value={userCommunity}
					/>
				</form>
			</div>
		</>
	);
};

export default NewUserForm;
