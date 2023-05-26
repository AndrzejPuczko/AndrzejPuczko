import { useState } from 'react'

import './App.module.scss'
import AddUser from './components/Users/AddUser'
import UsersList from './components/Users/UsersList'

const App = () => {
	const [usersList, setUsersList] = useState([])

	const addUserHandler = generatedUser => {
		setUsersList(prevUsersList => {
			const updatedUsers = [...prevUsersList]
			updatedUsers.unshift(generatedUser)
			return updatedUsers
		})
	}
	return (
		<div>
			<AddUser generate={addUserHandler} />
			<UsersList users={usersList} />
		</div>
	)
}

export default App
