import { useContext, useState } from 'react'
import Modal from '../UI/Modal'
import styles from './Cart.module.css'
import CartContext from '../../store/cart-context'
import CartItem from './CartItem'
import Checkout from './Checkout'

const Cart = props => {
	const [isCheckout, setIsCheckout] = useState(false)

	const [isSubmitting, setIsSubmitting] = useState(false)
	const [didSubmit, setDidSubmit] = useState(false)

	const cartCtx = useContext(CartContext)
	const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
	const hasItems = cartCtx.items.length > 0

	const cartItemRemoveHandler = id => {
		cartCtx.removeItem(id)
	}

	const cartItemAddHandler = item => {
		cartCtx.addItem({ ...item, amount: 1 })
	}

	const cartItems = (
		<ul className={styles.cartItems}>
			{cartCtx.items.map(item => (
				<CartItem
					key={item.id}
					name={item.name}
					amount={item.amount}
					price={item.price}
					onRemove={cartItemRemoveHandler.bind(null, item.id)}
					onAdd={cartItemAddHandler.bind(null, item)}
				/>
			))}
		</ul>
	)

	const orderHandler = () => {
		setIsCheckout(true)
	}

	const submitOrderHandler = async userData => {
		setIsSubmitting(true)
		await fetch('https://my-test-project-2242-default-rtdb.firebaseio.com/order.json', {
			method: 'POST',
			body: JSON.stringify({
				user: userData,
				orderedItems: cartCtx.items,
			}),
		})
		setIsSubmitting(false)
		setDidSubmit(true)
		cartCtx.clearCard()
	}

	const modalActions = (
		<div className={styles.actions}>
			<button className={styles.buttonAlt} onClick={props.onClose}>
				Close
			</button>
			{hasItems && (
				<button className={styles.button} onClick={orderHandler}>
					Order
				</button>
			)}
		</div>
	)

	const didSubmitModalContent = <p>Successfully sending order. Thank you!</p>

	const isSubmittingModalContent = <p>Sending order data. </p>

	const cartModalContent = (
		<>
			{cartItems}
			<div className={styles.total}>
				<span>Total Amount</span>
				<span>{totalAmount}</span>
			</div>
			{isCheckout && <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />}
			{!isCheckout && modalActions}
		</>
	)

	return <Modal onClose={props.onClose}>
		{!isSubmitting && !didSubmit && cartModalContent}
		{isSubmitting && isSubmittingModalContent}
		{!isSubmitting && didSubmit && didSubmitModalContent}
	</Modal>
}

export default Cart
