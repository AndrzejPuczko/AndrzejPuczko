import { useState } from 'react'

import ExpensesFilter from './ExpensesFilter'
import { ExpensesList } from './ExpensesList'
import { ExpensesChart } from './ExpensesChart'
import './Expenses.scss'
import Card from './../UI/Card'

const Expenses = props => {
	const [filterYear, setFilterYear] = useState('2021')

	const filterChangeHandler = selectedYear => {
		setFilterYear(selectedYear)
	}

	const filteredExpenses = props.items.filter(expense => {
		return expense.date.getFullYear().toString() === filterYear
	})

	return (
		<li>
			<Card className="expenses">
				<ExpensesFilter selected={filterYear} onChangeFilter={filterChangeHandler} />
				<ExpensesChart expenses={filteredExpenses} />
				<ExpensesList items={filteredExpenses} />
			</Card>
		</li>
	)
}

export default Expenses
