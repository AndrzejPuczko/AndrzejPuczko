const lightMode = document.querySelector('.light')
const darkMode = document.querySelector('.dark')
const incomeArea = document.querySelector('.income-area')
const expensesArea = document.querySelector('.expenses-area')
const addTransaction = document.querySelector('.add-transaction')
const transactionPanel = document.querySelector('.add-transaction-panel')
const deleteAll = document.querySelector('.delete-all')
const transactionName = document.querySelector('#name')
const transactionAmount = document.querySelector('#amount')
const transactionCategory = document.querySelector('#category')
const saveTransaction = document.querySelector('.save')
const cancelTransaction = document.querySelector('.cancel')
const availableMoney = document.querySelector('.available-money')
const error = document.querySelector('.error')

let root = document.documentElement
let ID = 0
let categoryIcon
let selectedCategory
let moneyArr = [0]

const openPanel = () => {
	transactionPanel.style.display = 'flex'
}

const cancel = () => {
	transactionPanel.style.display = 'none'
	transactionName.value = ''
	transactionAmount.value = ''
	transactionCategory.value = 'none'
	error.textContent = ''
}

const createNewTransaction = () => {
	const newTransaction = document.createElement('div')
	const newTransactionName = document.createElement('p')
	const newTransactionAmount = document.createElement('p')
	newTransaction.classList.add('transaction')
	newTransaction.setAttribute('id', ID)
	newTransactionAmount.classList.add('transaction-amount')
	newTransactionName.classList.add('transaction-name')

	changeIcon(transactionCategory.value)

	newTransactionName.textContent = `${categoryIcon} ${transactionName.value}`
	newTransactionAmount.innerHTML = `${transactionAmount.value} zł
	<button class="delete" onclick="deleteTransaction(${ID})">
		<i class="fas fa-times"></i>
	</button>`

	newTransaction.appendChild(newTransactionName)
	newTransaction.appendChild(newTransactionAmount)

	if (transactionCategory.value === 'income') {
		incomeArea.appendChild(newTransaction)
		moneyArr.push(+transactionAmount.value)
	} else {
		expensesArea.appendChild(newTransaction)
		moneyArr.push(+transactionAmount.value * -1)
	}
	ID++
	calculate()
}

const changeIcon = transaction => {
	switch (transaction) {
		case 'cinema':
			categoryIcon = '🎥'
			break
		case 'shopping':
			categoryIcon = '🛍️'
			break
		case 'food':
			categoryIcon = '🥤'
			break

		default:
			categoryIcon = '💵'
			break
	}
}

const selectCategory = () => {
	if (transactionCategory.value !== 'none' && transactionName.value !== '' && transactionAmount.value !== '') {
		if (+transactionAmount.value < 0) {
			error.textContent = 'Liczba nie może być ujemna'
		} else {
			createNewTransaction()
			cancel()
		}
	} else {
		error.textContent = 'Proszę wypełnić wszystkie pola'
	}
}

const deleteTransaction = id => {
	const deleteId = document.getElementById(id)
	let reduceMoney = parseFloat(deleteId.children[1].outerText)
	deleteId.parentElement == expensesArea ? (reduceMoney *= -1) : false
	moneyArr.indexOf(reduceMoney) !== -1 ? moneyArr.splice(moneyArr.indexOf(reduceMoney), 1) : false
	deleteId.remove()
	calculate()
}

const deleteAllTransactions = () => {
	const id = document.querySelectorAll('.transaction')
	id.forEach(item => item.remove())
	moneyArr = [0]
	availableMoney.textContent = `${moneyArr}zł`
}

const calculate = () => {
	const money = moneyArr.reduce((acc, val) => acc + val)
	availableMoney.textContent = `${money}zł`
}

addTransaction.addEventListener('click', openPanel)
cancelTransaction.addEventListener('click', cancel)
saveTransaction.addEventListener('click', selectCategory)
deleteAll.addEventListener('click', deleteAllTransactions)
lightMode.addEventListener('click', () => {
	root.style.setProperty('--first-color', '#F9F9F9')
	root.style.setProperty('--second-color', '#14161F')
	root.style.setProperty('--border-color', 'rgba(0, 0, 0, .2)')
})
darkMode.addEventListener('click', () => {
	root.style.setProperty('--first-color', '#14161F')
	root.style.setProperty('--second-color', '#F9F9F9')
	root.style.setProperty('--border-color', 'rgba(252, 252, 252, .2)')
})
