const currencyOne = document.querySelector('#currency-one')
const amountOne = document.querySelector('.amount-one')
const currencyTwo = document.querySelector('#currency-two')
const amountTwo = document.querySelector('.amount-two')
const swapBtn = document.querySelector('.swap')
const rateInfo = document.querySelector('.rate-info')
const dateInfo = document.querySelector('.date-info')
const currentRatePln = document.querySelector('.cantor-value')
const currentRateButton = document.querySelector('.current-rate-pln button')

const calculate = () => {
	const URL = `https://api.exchangerate.host/convert?from=${currencyOne.value}&to=${currencyTwo.value}`
	fetch(URL)
		.then(res => res.json())
		.then(data => {
			console.log(data.date)
			amountTwo.value = (amountOne.value * data.result).toFixed(2)
			rateInfo.textContent = `1 ${currencyOne.value} = ${data.result.toFixed(4)} ${currencyTwo.value}`
			dateInfo.textContent = `Waluta zaktualizowana na dzień ${data.date}`
		})
		.catch(err => console.error(err)) // catch wyświetla błędy
}

const swap = () => {
	const swap = currencyOne.value
	currencyOne.value = currencyTwo.value
	currencyTwo.value = swap
	calculate()
}

const cantor = () => {
	const value = {
		1: 'EUR',
		2: 'USD',
		3: 'CZK',
		4: 'GBP',
		5: 'AUD',
		6: 'CAD',
		7: 'JPY',
	}
	const URL = `https://api.exchangerate.host/date?latest&base=PLN&symbols=${value[1]},${value[2]},${value[3]},${value[4]},${value[5]},${value[6]},${value[7]}`

	fetch(URL)
		.then(res => res.json())
		.then(data => {
			const arrValue = Object.entries(data.rates)
			arrValue.forEach(item => {
				const paragraph = document.createElement('p')
				paragraph.innerHTML = `1 ${item[0]} = ${(1 / item[1]).toFixed(2)}PLN`
				currentRatePln.appendChild(paragraph)
			})
			currentRateButton.setAttribute('disabled', '')
		})
		.catch(err => console.error(err))
		
}

currencyOne.addEventListener('change', calculate)
currencyTwo.addEventListener('change', calculate)
amountOne.addEventListener('input', calculate)
swapBtn.addEventListener('click', swap)
currentRateButton.addEventListener('click', cantor)
