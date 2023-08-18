import Link from 'next/link'
import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
	return (
		<div className={styles.center}>
			<Image className={styles.logo} src="/next.svg" alt="Next.js Logo" width={180} height={37} priority />

      <Link href="/kontakt">Przejdź do kontaktu</Link>
      <Link href="/about">Przejdź do about</Link>
		</div>
	)
}
