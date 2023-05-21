const todoInput = document.querySelector('.todo-input')
const alertInfo = document.querySelector('.alert-info')
const addBtn = document.querySelector('.add-btn')
const ulList = document.querySelector('.todo-list ul')
const allTasks = document.getElementsByTagName('li')
const popup = document.querySelector('.popup')
const popupInfo = document.querySelector('.popup-info')
const popupInput = document.querySelector('.popup-input')
const addPopupBtn = document.querySelector('.accept')
const closeTodoBtn = document.querySelector('.cancel')
let todoToEdit
let ID = 0

const addNewTask = () => {
	if (todoInput.value !== '') {
		const newTask = document.createElement('li')
		newTask.setAttribute('id', ID)
		newTask.innerHTML = `${todoInput.value}<div class="tools"><button class="complete"><i class="fas fa-check"></i></button><button class="edit">EDYTUJ</button><button class="delete"><i class="fas fa-times"></i></button></div>`

		ulList.appendChild(newTask)
		ID++
		alertInfo.textContent = ''
		todoInput.value = ''
	} else {
		alertInfo.style.color = 'red'
		alertInfo.textContent = 'Wpisz treść zadania'
	}
}

const editTask = target => {
	todoToEdit = target.closest('li')
	popupInput.value = todoToEdit.firstChild.textContent
	popup.style.display = 'flex'
}

const editInfoTask = () => {
	if (popupInput.value !== '') {
		todoToEdit.firstChild.textContent = popupInput.value
		popup.style.display = 'none'
		popupInfo.textContent = ''
	} else {
		popupInfo.textContent = 'Musisz podać jakąś treść!'
	}
}

const cancelEdit = () => {
	popup.style.display = 'none'
	popupInfo.textContent = ''
}

const checkActions = ({ target }) => {
	todoToEdit = target.closest('li')

	if (target.classList.contains('complete')) {
		todoToEdit.classList.toggle('completed')
	} else if (target.classList.contains('edit')) {
		editTask(target)
	} else if (target.classList.contains('delete')) {
		todoToEdit.remove()
		if (allTasks.length === 0) {
			alertInfo.textContent = 'Brak zadań na liście'
		}
	}
}

const enterKeyCheck = event => {
	if (event.key === 'Enter') {
		addNewTask()
	}
}

addBtn.addEventListener('click', addNewTask)
ulList.addEventListener('click', e => {
	checkActions(e)
})
closeTodoBtn.addEventListener('click', cancelEdit)
addPopupBtn.addEventListener('click', editInfoTask)
todoInput.addEventListener('keyup', enterKeyCheck)
