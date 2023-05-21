const price = document.querySelector('#price')
const people = document.querySelector('#people')
const tip = document.querySelector('#tip')
const btn = document.querySelector('.count')
const cost = document.querySelector('.cost')
const costInfo = document.querySelector('.cost-info')
const error = document.querySelector('.error')


const checkValue = () => {
	if (price.value === "" || people.value === "" || tip.value === "0") {
		error.textContent = "Proszę uzupełnić wszystkie pola"
		costInfo.style.display = 'none'
	} else {
		error.textContent = ""
		calculate(price.value, people.value, tip.value)
	}
}

function calculate (price, people, tip) {
	const sum = (+price + (+price * +tip)) / +people
	cost.textContent = sum.toFixed(2)
	costInfo.style.display = 'flex'
}


btn.addEventListener('click', checkValue)