const input = document.querySelector('.search')
const ul = document.querySelectorAll('ul li')
const drinks = Array.from(ul)

const showDrinks = () => {
	drinks.forEach(li => {
		let text = input.value.toLowerCase()
		const task = li.textContent.toLowerCase()

		if (task.indexOf(text) === -1) {
			li.style.display = 'none'
		} else {
			li.style.display = 'block'
		}
	})
}

input.addEventListener('keyup', showDrinks)
