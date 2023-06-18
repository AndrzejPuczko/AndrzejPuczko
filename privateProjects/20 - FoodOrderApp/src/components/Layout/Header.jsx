import styles from './Header.module.css'
import mealsImage from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton'

const Header = props => {
	return (
		<>
			<header className={styles.header}>
				<h1>OrderMeals</h1>
				<HeaderCartButton onClick={props.onShowCart} />
			</header>
			<div className={styles.mainImage}>
				<img src={mealsImage} alt="A table full of delicious food" />
			</div>
		</>
	)
}

export default Header
