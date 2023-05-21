import { useState } from 'react'
import './ExpenseForm.scss'

const ExpenseForm = props => {
	const [enteredTitle, setEnteredTitle] = useState('')
	const [enteredAmount, setEnteredAmount] = useState('')
	const [enteredDate, setEnteredDate] = useState('')
	const [formContent, setFormContent] = useState(false)

	const titleChangeHandler = ({ target }) => setEnteredTitle(target.value)
	const amountChangeHandler = ({ target }) => setEnteredAmount(target.value)
	const dateChangeHandler = ({ target }) => setEnteredDate(target.value)

	const submitHandler = event => {
		event.preventDefault()
		const expenseDate = {
			title: enteredTitle,
			amount: Number(enteredAmount),
			date: new Date(enteredDate),
		}
		props.onSaveExpenseData(expenseDate)
		setEnteredTitle('')
		setEnteredAmount('')
		setEnteredDate('')
	}

	const showFormContent = () => {
		setFormContent(true)
	}
	const hideFormContent = () => {
		setFormContent(false)
	}

	return (
		<div>
			{!formContent && <button type='button' onClick={showFormContent}>Add New Expenses</button>}
			{formContent && (
				<form onSubmit={submitHandler}>
					<div className="new-expense__controls">
						<div className="new-expense__control">
							<label>Title</label>
							<input type="text" value={enteredTitle} onChange={titleChangeHandler} />
						</div>
						<div className="new-expense__control">
							<label>Amount</label>
							<input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
						</div>
						<div className="new-expense__control">
							<label>Date</label>
							<input type="date" value={enteredDate} min="2019-01-01" max="2024-12-31" onChange={dateChangeHandler} />
						</div>
					</div>
					<div className="new-expense__actions">
						<button type='button' onClick={hideFormContent}>Cancel</button>
						<button type="submit">Add Expense</button>
					</div>
				</form>
			)}
		</div>
	)
}

export { ExpenseForm }
