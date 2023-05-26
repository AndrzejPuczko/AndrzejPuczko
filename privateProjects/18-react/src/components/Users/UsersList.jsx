import styles from './UsersList.module.scss'
import Card from '../UI/Card'

const UsersList = props => {
	return (
		<Card className={styles.users}>
			<ul>
				{props.users.map((user, id) => (
					<li key={id} id={id}>
						{user.name} ({user.age} years old.)
					</li>
				))}
			</ul>
		</Card>
	)
}

export default UsersList
