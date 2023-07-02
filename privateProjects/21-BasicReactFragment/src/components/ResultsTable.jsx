import styles from './ResultsTable.module.css'

const ResultsTable = ({ investmentData }) => {
	return (
		<table className={styles.result}>
			<thead>
				<tr>
					<th>Year</th>
					<th>Total Savings</th>
					<th>Interest (Year)</th>
					<th>Total Interest</th>
					<th>Invested Capital</th>
				</tr>
			</thead>
			<tbody>
				{investmentData.map((item, index) => (
					<tr key={index}>
						<td>{item.year}</td>
						<td>${item.savingsEndOfYear}</td>
						<td>${item.yearlyInterest}</td>
						<td>${(item.savingsEndOfYear - item.investedCapital).toFixed(2)}</td>
						<td>${item.investedCapital}</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}

export default ResultsTable
