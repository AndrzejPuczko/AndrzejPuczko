import { useState } from 'react'
import Card from './../UI/Card'
import Button from './../UI/Button'
import styles from './AddUser.module.scss'

const AddUser = props => {
	const [enteredUserName, setEnteredUserName] = useState('')
	const [enteredAge, setEnteredAge] = useState('')

	const addUserHandler = event => {
		event.preventDefault()
		console.log(enteredUserName, enteredAge)
		setEnteredAge('')
		setEnteredUserName('')
	}

	const userNameChangeHandler = ({ target }) => {
		setEnteredUserName(target.value)
	}

	const ageChangeHandler = ({ target }) => {
		setEnteredAge(target.value)
	}

	return (
		<Card className={styles.input}>
			<form onSubmit={addUserHandler}>
				<label htmlFor="username">Username</label>
				<input id="username" type="text" onChange={userNameChangeHandler} />
				<label htmlFor="age">Age (years)</label>
				<input id="age" type="number" onChange={ageChangeHandler} />
				<Button type="submit">Add User</Button>
			</form>
		</Card>
	)
}

export default AddUser
