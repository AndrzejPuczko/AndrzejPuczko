const startBtn = document.querySelector('.start')
const pauseBtn = document.querySelector('.pause')
const stopBtn = document.querySelector('.stop')
const resetBtn = document.querySelector('.reset')
const historyBtn = document.querySelector('.history')
const stopwatch = document.querySelector('.stopwatch')
const time = document.querySelector('.time')
const timeList = document.querySelector('.time-list')

const infoBtn = document.querySelector('.fa-question')
const colorsBtn = document.querySelector('.fa-paint-brush')
const modalShadow = document.querySelector('.modal-shadow')
const closeModalBtn = document.querySelector('.close')
const colors = document.querySelector('.colors')
const colorOne = document.querySelector('.one')
const colorTwo = document.querySelector('.two')
const colorThree = document.querySelector('.three')
const colorFour = document.querySelector('.four')
let root = document.documentElement

let countTime
let minutes = 0
let seconds = 0
let timesArr = []

const handleStart = () => {
	clearInterval(countTime)

	countTime = setInterval(() => {
		if (seconds < 9) {
			seconds++
			stopwatch.textContent = `${minutes}:0${seconds}`
		} else if (seconds >= 9 && seconds < 59) {
			seconds++
			stopwatch.textContent = `${minutes}:${seconds}`
		} else if (seconds >= 59) {
			seconds = 0
			minutes++
			stopwatch.textContent = `${minutes}:00`
		}
	}, 1000)
}

const handlePause = () => {
	clearInterval(countTime)
}

const handleStop = () => {
	time.innerHTML = `Ostatni czas: ${stopwatch.textContent}`

	if (seconds > 0 || minutes > 0) {
		time.style.visibility = 'visible'
		timesArr.push(stopwatch.textContent)
	} else {
		time.style.visibility = 'hidden'
	}
	clearStuff()
}

const handleReset = () => {
	timesArr = []
	time.style.visibility = 'hidden'
	clearStuff()
}

const clearStuff = () => {
	clearInterval(countTime)
	minutes = 0
	seconds = 0
	stopwatch.textContent = `${minutes}:0${seconds}`
	timeList.textContent = ''
}

const showHistory = () => {
	let number = 1
	timeList.textContent = ''
	timesArr.forEach(item => {
		const history = document.createElement('li')
		history.innerHTML = `Pomiar nr ${number}: <span>${item}</span>`
		timeList.append(history)
		number++
	})
}

const showModal = () => {
	modalShadow.style.display = 'block'
	modalShadow.classList.add('modal-animation')
}

const closeModal = () => {
	modalShadow.style.display = 'none'
	modalShadow.classList.remove('modal-animation')
}

startBtn.addEventListener('click', handleStart)
pauseBtn.addEventListener('click', handlePause)
stopBtn.addEventListener('click', handleStop)
resetBtn.addEventListener('click', handleReset)
historyBtn.addEventListener('click', showHistory)
infoBtn.addEventListener('click', showModal)
closeModalBtn.addEventListener('click', closeModal)
colorsBtn.addEventListener('click', () => {
	colors.classList.toggle('show-colors')
})

colorOne.addEventListener('click', () => {
	root.style.setProperty('--first-color', 'rgb(250, 20, 6')
})
colorTwo.addEventListener('click', () => {
	root.style.setProperty('--first-color', 'rgb(6, 173, 250')
})
colorThree.addEventListener('click', () => {
	root.style.setProperty('--first-color', 'rgb(0, 255, 42')
})
colorFour.addEventListener('click', () => {
	root.style.setProperty('--first-color', 'rgb(255, 213, 0')
})

window.addEventListener('click', ({ target }) => (target === modalShadow ? closeModal() : false))
