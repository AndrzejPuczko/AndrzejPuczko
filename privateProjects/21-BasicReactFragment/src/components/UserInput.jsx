import styles from './UserInput.module.css'

const UserInput = ({ onCalculate, onReset }) => {
	const calculate = event => {
		event.preventDefault()
		onCalculate(event)
	}

	const resetHandler = event => {
		onReset(event)
	}

	return (
		<form className={styles.form} onSubmit={calculate}>
			<div className={styles.inputGroup}>
				<p>
					<label htmlFor="current-savings">Current Savings ($)</label>
					<input type="number" id="current-savings" required />
				</p>
				<p>
					<label htmlFor="yearly-contribution">Yearly Savings ($)</label>
					<input type="number" id="yearly-contribution" required />
				</p>
			</div>
			<div className={styles.inputGroup}>
				<p>
					<label htmlFor="expected-return">Expected Interest (%, per year)</label>
					<input type="number" id="expected-return" required />
				</p>
				<p>
					<label htmlFor="duration">Investment Duration (years)</label>
					<input type="number" id="duration" required />
				</p>
			</div>
			<p className={styles.actions}>
				<button type="reset" className={styles.buttonAlt} onClick={resetHandler}>
					Reset
				</button>
				<button type="submit" className={styles.button}>
					Calculate
				</button>
			</p>
		</form>
	)
}

export default UserInput
