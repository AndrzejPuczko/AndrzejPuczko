import { useState, Fragment, useRef } from 'react'
import Card from './../UI/Card'
import Button from './../UI/Button'
import ErrorModal from '../UI/ErrorModal'
import styles from './AddUser.module.scss'

const AddUser = props => {
	const nameInputRef = useRef()
	const ageInputRef = useRef()

	const [error, setError] = useState()

	const addUserHandler = event => {
		event.preventDefault()
		const enteredName = nameInputRef.current.value
		const enteredUserAge = ageInputRef.current.value

		if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
			setError({
				title: 'Invalid Input',
				message: 'Please enter a valid name and age (non-empty values).',
			})
			return
		}
		if (Number(enteredUserAge) < 1) {
			setError({
				title: 'Invalid age',
				message: 'Please enter a valid age (age > 0)',
			})
			return
		} else {
			props.onAddUser({ name: enteredName, age: enteredUserAge })
			nameInputRef.current.value = ''
			ageInputRef.current.value = ''
		}
	}

	const hideErrorMessage = () => {
		setError(null)
	}

	return (
		<Fragment>
			{error && <ErrorModal title={error.title} message={error.message} error={hideErrorMessage}></ErrorModal>}
			<Card className={styles.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor="username">Username</label>
					<input id="username" type="text" ref={nameInputRef} />
					<label htmlFor="age">Age (years)</label>
					<input id="age" type="number" ref={ageInputRef} />
					<Button type="submit">Add User</Button>
				</form>
			</Card>
		</Fragment>
	)
}

export default AddUser
