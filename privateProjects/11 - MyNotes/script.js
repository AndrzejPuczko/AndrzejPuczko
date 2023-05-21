const addBtn = document.querySelector('.add')
const saveBtn = document.querySelector('.save')
const cancelBtn = document.querySelector('.cancel')
const deleteBtn = document.getElementsByClassName('.delete-note')
const doneBtn = document.getElementsByClassName('.done-note')
const deleteAllBtn = document.querySelector('.delete-all')

const noteArea = document.querySelector('.note-area')
const notePanel = document.querySelector('.note-panel')
const category = document.querySelector('#category')
const textarea = document.querySelector('#text')
const error = document.querySelector('.error')

let selectedValue
let cardID = 0

const openPanel = () => {
	notePanel.style.display = 'flex'
}

const closePanel = () => {
	notePanel.style.display = 'none'
	error.style.visibility = 'hidden'
	textarea.value = ''
	category.selectedIndex = 0
}

const addNote = () => {
	if (textarea.value !== '' && category.selectedIndex !== 0) {
		error.style.visibility = 'hidden'
		cardID++
		const newNote = document.createElement('div')
		const noteBody = document.createElement('div')
		let indexValue = category.options[category.selectedIndex]
		noteBody.classList.add('note-body')
		newNote.classList.add('note')
		newNote.setAttribute('id', cardID)
		newNote.innerHTML = `
        <div class="note-header">
        <h3 class="note-title">${indexValue.textContent} #${cardID}</h3>
            <button class="done-note" onclick="doneNote(${cardID})"> 
            <i class="fa-regular fa-square-check"></i>
            </button>    
            <button class="delete-note" onclick="deleteNote(${cardID})"> 
            <i class="fas fa-times icon"></i>
            </button>
        </div>`
		noteBody.textContent = textarea.value
		noteArea.appendChild(newNote)
		newNote.appendChild(noteBody)
		checkColor(indexValue.value, newNote)
		closePanel()
	} else {
		error.style.visibility = 'visible'
	}
}

const checkColor = (note, newNote) => {
	switch (+note) {
		case 1:
			newNote.style.backgroundColor = 'rgb(72, 255,0)'
			break
		case 2:
			newNote.style.backgroundColor = 'rgb(255, 243,0)'
			break
		case 3:
			newNote.style.backgroundColor = 'rgb(0, 170,255)'
			break
		default:
			note.style.backgroundColor = 'rgb(72, 255,0)'
			break
	}
}

const deleteNote = id => {
    const noteToDelete = document.getElementById(id)
    noteArea.removeChild(noteToDelete)

} 
const doneNote = id => {
    const noteToDone = document.getElementById(id)
    noteToDone.style.textDecoration = 'line-through'

} 

const deleteAllNotes = () => {
    noteArea.textContent = ''
    cardID = 0
}

addBtn.addEventListener('click', openPanel)
cancelBtn.addEventListener('click', closePanel)
saveBtn.addEventListener('click', addNote)
saveBtn.addEventListener('click', addNote)
deleteAllBtn.addEventListener('click', deleteAllNotes)
