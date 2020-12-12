import { useState } from 'react';
import NewUserForm from '../components/NewUserForm';

const NewUserBox = () => {
	const [users, setUsers] = useState([]);

	const addNewUser = (newUser) => {
		// SENDS IT TO BACKEND API
	};

	return (
		<>
			<NewUserForm
				onNewUserSubmit={(newUser) => {
					addNewUser(newUser);
				}}
			/>
		</>
	);
};

export default NewUserBox;
