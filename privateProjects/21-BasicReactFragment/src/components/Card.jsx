import Items from './Items'
const Card = ({ concepts }) => {
	return (
		<ul id="concepts">
			<Items concepts={concepts} />
		</ul>
	)
}

export default Card
