import { useState } from 'react';
import NewUserForm from '../components/NewUserForm';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NewUserBox = () => {
	const [users, setUsers] = useState([]);

	const addNewUser = (newUser) => {
		// POSTS IT TO BACKEND API
	};

	return (
		<>
			<Header />
			<div>
				<h2>Sign Up</h2>
			</div>
			<NewUserForm
				onNewUserSubmit={(newUser) => {
					addNewUser(newUser);
				}}
			/>
			<Footer />
		</>
	);
};

export default NewUserBox;
