const img = document.querySelector('img')
const input = document.querySelector('input')
const answer = document.querySelector('.answer')
const error = document.querySelector('.error')

const answerObj = {
	a: 'tak',
	b: 'nie',
	c: 'nie wiem',
	d: 'nie spodziewaj się takiej odpowiedzi po mnie',
	a1: 'tak',
	b1: 'nie',
	c1: 'nie wiem',
	d1: 'nie spodziewaj się takiej odpowiedzi po mnie',
}

const generateAnswer = () => {
	const keys = Object.keys(answerObj)
	const randomKey = keys[Math.floor(Math.random() * keys.length)]
	const randomValue = answerObj[randomKey]
	answer.innerHTML = `<span>Odpowiedż:</span> ${randomValue}`
}

const checkValue = () => {
	if (input.value === '') {
		error.textContent = 'Musisz wpisać pytanie'
		answer.textContent = ''
		return
	}

	if (input.value.slice(-1) !== '?') {
		error.textContent = 'Pytanie musi kończyć się znakiem zapytania "?"'
		answer.textContent = ''
	} else {
		error.textContent = ''
		generateAnswer()
	}
}

const startGame = () => {
	img.classList.add('shake-animaton')

	setTimeout(() => {
		img.classList.remove('shake-animaton')
		checkValue()
	}, 1000)
}

img.addEventListener('click', startGame)
input.addEventListener('keypress', event => {
	if (event.keyCode === 13) {
		startGame()
	}
})
