import { Fragment } from 'react'
import ReactDOM from 'react-dom'
import styles from './ErrorModal.module.scss'
import Card from './Card'
import Button from './Button'

const Backdrop = props => {
	return <div className={styles.backdrop} onClick={props.error} />
}

const ModalOverlay = props => {
	return (
		<Card className={styles.modal}>
			<header className={styles.header}>
				<h2>{props.title}</h2>
			</header>
			<div className={styles.content}>
				<p>{props.message}</p>
			</div>
			<footer className={styles.actions}>
				<Button onClick={props.error}>Okey</Button>
			</footer>
		</Card>
	)
}

const ErrorModal = props => {
	return (
		<Fragment>
			{ReactDOM.createPortal(<Backdrop error={props.error}/>, document.querySelector('#backdrop-root'))}
            {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} error={props.error} />, document.querySelector('#overlay-root'))}
		</Fragment>
	)
}

export default ErrorModal
