import { useState } from 'react'
import Card from './../UI/Card'
import Button from './../UI/Button'
import styles from './AddUser.module.scss'

const AddUser = props => {
	const [enteredUserName, setEnteredUserName] = useState('')
	const [enteredAge, setEnteredAge] = useState('')

	const addUserHandler = event => {
		event.preventDefault()

		if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
			return
		}
		if (Number(enteredAge) < 1) {
			return
		} else {
			props.generate({ name: enteredUserName, age: enteredAge })
			setEnteredAge('')
			setEnteredUserName('')
		}
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
				<input id="username" type="text" value={enteredUserName} onChange={userNameChangeHandler} />
				<label htmlFor="age">Age (years)</label>
				<input id="age" type="number" value={enteredAge} onChange={ageChangeHandler} />
				<Button type="submit">Add User</Button>
			</form>
		</Card>
	)
}

export default AddUser
