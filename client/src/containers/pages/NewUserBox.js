import { useState, useEffect } from 'react';
import NewUserForm from '../../components/signUpPage/NewUserForm';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { getUsers, postUser } from '../../fetches/UserFetch';

const NewUserBox = () => {
	const [users, setUsers] = useState([]);

	const addNewUser = (newUser) => {
		// POSTS IT TO BACKEND API & REDIRECTS TO SEARCH PAGE OR MY BOOKS PAGE
		postUser(newUser);
	};

	useEffect(() => {
		getUsers().then((data) => setUsers(data));
	}, []);

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
			<div>
				{users.map((user, index) => {
					return (
						<div key={index}>
							<h6>{user.username}</h6>
							<h6>{user.userEmail}</h6>
							<h6>{user.userCommunity}</h6>
						</div>
					);
				})}
			</div>
			<Footer />
		</>
	);
};

export default NewUserBox;
