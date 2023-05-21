// 1. Przypisz zdarzenie mouseenter do wszystkich przekazanych elementów
// 2. Po najechaniu na element, odczytaj jego pozycję na stronie
// 3. Stwórz dynamicznie element tooltip
// 4. Wypozycjonuj element tooltip w odpowiednim miejscu i wstaw go na stronę
// 5. Przypisz zdarzenie mouseleave do wszystkich przekazanych elementów
// 6. Po zjechaniu z elementu, usuń tooltip ze strony
// 7. Zamknij kod w module

const test = document.querySelector('.edu-tooltip')

function createTooltip(title, options) {
	const tooltip = document.createElement('div')
	tooltip.className = 'edu-tooltip hidden'
	tooltip.textContent = title
	document.body.append(tooltip)

    const {x,y,w} = options
	tooltip.style.left = `${x + w / 2 - tooltip.offsetWidth / 2}px`
	tooltip.style.top = `${y - tooltip.offsetHeight - 10}px` //offsetHeight !!!

	tooltip.classList.remove('hidden') 
}

const hideTooltip = () => {
	const hide = document.querySelector('.edu-tooltip')
	hide.remove()
}

function showTooltip({ target }) {
	const position = target.getBoundingClientRect()
	const title = target.title

	const options = {
		w: position.width,
		x: position.left,
		y: position.top,
	}
	createTooltip(title, options)
}

function init(elems) {
	elems.forEach(item => item.addEventListener('mouseenter', showTooltip))
	elems.forEach(item => item.addEventListener('mouseleave', hideTooltip))
}
init(document.querySelectorAll('[title]'))
