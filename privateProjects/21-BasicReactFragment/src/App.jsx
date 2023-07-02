import { useState } from 'react'
import Header from './components/Header'
import UserInput from './components/UserInput'
import ResultsTable from './components/ResultsTable'

function App() {
	const [investTable, setInvestTable] = useState(false)
	const [investmentData, setInvestmentData] = useState({})

	const calculateHandler = userInput => {
		const yearlyData = [] 

		let currentSavings = +userInput.target['current-savings'].value 
		let investedCapital = currentSavings
		const yearlyContribution = +userInput.target['yearly-contribution'].value 
		const expectedReturn = +userInput.target['expected-return'].value / 100
		const duration = +userInput.target['duration'].value

		for (let i = 0; i < duration; i++) {
			const yearlyInterest = currentSavings * expectedReturn
			currentSavings += yearlyInterest + yearlyContribution
			investedCapital += yearlyContribution
			yearlyData.push({
				year: i + 1,
				yearlyInterest: yearlyInterest.toFixed(2),
				savingsEndOfYear: currentSavings.toFixed(2),
				yearlyContribution: yearlyContribution,
				investedCapital: investedCapital,
			})
		}
		setInvestTable(true)
		setInvestmentData(yearlyData)
	}

	const resetHandler = () => {
		setInvestTable(false)
		setInvestmentData({})
	}

	return (
		<div>
			<Header />
			<UserInput onCalculate={calculateHandler} onReset={resetHandler} />
			{investTable ? <ResultsTable investmentData={investmentData} /> : <p className="errorMessage">Fill in all fields of the form</p>}
		</div>
	)
}

export default App