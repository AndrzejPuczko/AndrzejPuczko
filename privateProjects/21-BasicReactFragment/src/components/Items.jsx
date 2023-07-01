const Items = ({ concepts }) => {
	return concepts.map(item => (
		<li className="concept" key={item.title}>
			<img src={item.image} alt="TODO: TITLE" />
			<h2>{item.title}</h2>
			<p>{item.description}</p>
		</li>
	))
}

export default Items
