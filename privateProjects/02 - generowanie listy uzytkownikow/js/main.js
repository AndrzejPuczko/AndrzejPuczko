const button = document.querySelector('button')

const URL = 'https://jsonplaceholder.typicode.com/users'

const download = () => {
	fetch(URL)
		.then(res => res.json())
		.then(data => renderTable(data))
}

function renderRows(users) {
	return users.map(user => {
		return `             
        <tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.address.zipcode}</td>
            <td><a href="mailto:${user.email}">${user.email}</a></td>
        </tr>`
	}).join("")
}

const renderTable = users => {
	const table = ` <table class="table is-fullwidth is-bordered is-striped mt-6">
    <thead>
        <tr>
            <th>ID</th>
            <th>Imię i nazwisko</th>
            <th>Nazwa użytkownika</th>
            <th>Adres e-mail</th>
        </tr>
    </thead>
    <tbody>
    ${renderRows(users)}
    </tbody>
    </table>`

	const div = document.createElement('div')
	div.innerHTML = table
	document.querySelector('.container').append(div)
}

button.addEventListener('click', download)
