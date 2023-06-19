import { useContext, useEffect, useState } from 'react'
import CartIcon from '../Cart/CartIcon'
import styles from './HeaderCartButton.module.css'
import CartContext from '../../store/cart-context'

const HeaderCartButton = props => {
	const [btnIsHighlighted, setBtnIsHighlighted] = useState(false)
	const cartCtx = useContext(CartContext)
	const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
		return currentNumber + item.amount
	}, 0)

	const btnClasses = `${styles.button} ${btnIsHighlighted ? styles.bump : ''}`

	const { items } = cartCtx

	useEffect(() => {
		if (items.length === 0) {
			return
		}
		setBtnIsHighlighted(true)

		setTimeout(() => {
			setBtnIsHighlighted(false)
		}, 300);
	}, [items])

	return (
		<button className={btnClasses} onClick={props.onClick}>
			<span className={styles.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={styles.badge}>{numberOfCartItems}</span>
		</button>
	)
}

export default HeaderCartButton
