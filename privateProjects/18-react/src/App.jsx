import { useState, Fragment } from 'react'

import './App.module.scss'
import AddUser from './components/Users/AddUser'
import UsersList from './components/Users/UsersList'

const App = () => {
	const [usersList, setUsersList] = useState([])

	const addUserHandler = generatedUser => {
		setUsersList(prevUsersList => {
			return [...prevUsersList, generatedUser]
		})
	}
	return (
		<Fragment>
			<AddUser onAddUser={addUserHandler} />
			<UsersList users={usersList} />
		</Fragment>
	)
}

export default App
