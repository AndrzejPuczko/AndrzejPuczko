import { useEffect, useState } from 'react'
import Card from '../UI/Card'
import styles from './AvailableMeals.module.css'
import MealItem from './MealItem/MealItem'

const DUMMY_MEALS = [
	{
		id: 'm1',
		name: 'Sushi',
		description: 'Finest fish and veggies',
		price: 22.99,
	},
	{
		id: 'm2',
		name: 'Schnitzel',
		description: 'A german specialty!',
		price: 16.5,
	},
	{
		id: 'm3',
		name: 'Barbecue Burger',
		description: 'American, raw, meaty',
		price: 12.99,
	},
]
const AvailableMeals = () => {

	const [meals, setMeals] = useState([])

	useEffect(() => {
		const fetchMeals = async () => {
			const response = await fetch('https://my-test-project-2242-default-rtdb.firebaseio.com/meals.json')
			const responseData = await response.json()

			const loadedMeals = []

			for (const key in responseData) {
				loadedMeals.push({
					id: key,
					name: responseData[key].name,
					description: responseData[key].description,
					price: responseData[key].price,
				})
			}
			
		}
		fetchMeals()
		
	}, [])



	const mealsList = meals.map(meal => <MealItem key={id} id={id} name={meal.name} description={meal.description} price={meal.price} />)

	return (
		<section className={styles.meals}>
			<Card>
				<ul>{mealsList}</ul>
			</Card>
		</section>
	)
}

export default AvailableMeals
