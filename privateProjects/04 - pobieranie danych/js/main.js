const button = document.querySelector('button')

const URL = 'https://jsonplaceholder.typicode.com/posts'
const post = { // tworzę obiekt w zależności od wymagań serwera
	title: 'Nowy wpis',
	body: 'Treść nowego wpisu'
}

const postMethod = () => {
	button.disabled = true;

	fetch(URL, {
		method: "POST", // dodajemy metodę POST
		body: JSON.stringify(post), // zamieniamy obiekt na text
		headers: {
			'Content-Type': "application/json" // dodajemy typ 
		}
	})
	.then(res => res.json()) // konwertujemy dane na json
	.then(json => {
		console.log(json); // wyświetlamy 
		button.textContent = 'Wysłano'
		
	})
	
}
 
button.addEventListener('click', postMethod)
