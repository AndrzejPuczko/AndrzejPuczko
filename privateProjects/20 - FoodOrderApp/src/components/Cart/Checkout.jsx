import { useRef, useState } from 'react'
import styles from './Checkout.module.css'

const isEmpty = value => value.trim() === ''
const isFiveChars = value => value.trim().length === 5

const Checkout = props => {
	const [formInputsValidity, setFormInputsValidity] = useState({
		name: true,
		street: true,
		city: true,
		postal: true,
	})

	const nameInputRef = useRef()
	const streetInputRef = useRef()
	const postalInputRef = useRef()
	const cityInputRef = useRef()

	const confirmHandler = event => {
		event.preventDefault()

		const enteredName = nameInputRef.current.value
		const enteredStreet = streetInputRef.current.value
		const enteredPostal = postalInputRef.current.value
		const enteredCity = cityInputRef.current.value

		const enteredNameIsValid = !isEmpty(enteredName)
		const enteredStreetIsValid = !isEmpty(enteredStreet)
		const enteredCityIsValid = !isEmpty(enteredCity)
		const enteredPostalIsValid = isFiveChars(enteredPostal)

		setFormInputsValidity({
			name: enteredNameIsValid,
			street: enteredStreetIsValid,
			city: enteredCityIsValid,
			postal: enteredPostalIsValid,
		})

		const formIsValid = enteredNameIsValid && enteredStreetIsValid && enteredCityIsValid && enteredPostalIsValid

		if (!formIsValid) {
			return
		}

        props.onConfirm({
            name: enteredName,
            street: enteredStreet,
            city: enteredCity,
            postal: enteredPostal,
        })
    }

	const nameControlClasses = `${styles.control} ${formInputsValidity.name ? '' : styles.invalid}`
	const streetControlClasses = `${styles.control} ${formInputsValidity.street ? '' : styles.invalid}`
	const cityControlClasses = `${styles.control} ${formInputsValidity.city ? '' : styles.invalid}`
	const postalControlClasses = `${styles.control} ${formInputsValidity.postal ? '' : styles.invalid}`

	return (
		<form className={styles.form} onSubmit={confirmHandler}>
			<div className={nameControlClasses}>
				<label htmlFor="name">Your Name</label>
				<input type="text" id="name" ref={nameInputRef} />
				{!formInputsValidity.name && <p>Please enter a valid name!</p>}
			</div>
			<div className={streetControlClasses}>
				<label htmlFor="street">Street</label>
				<input type="text" id="street" ref={streetInputRef} />
				{!formInputsValidity.street && <p>Please enter a valid street!</p>}
			</div>
			<div className={cityControlClasses}>
				<label htmlFor="postal">Postal Code</label>
				<input type="text" id="postal" ref={postalInputRef} />
				{!formInputsValidity.postal && <p>Please enter a valid postal code!</p>}
			</div>
			<div className={postalControlClasses}>
				<label htmlFor="city">City</label>
				<input type="text" id="city" ref={cityInputRef} />
				{!formInputsValidity.city && <p>Please enter a valid City!</p>}
			</div>
			<div className={styles.actions}>
				<button type="button" onClick={props.onCancel}>
					Cancel
				</button>
				<button className={styles.submit}>Confirm</button>
			</div>
		</form>
	)
}

export default Checkout
