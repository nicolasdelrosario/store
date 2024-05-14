'use client'
import Image from 'next/image'
import styles from '../css/global-error.module.css'

function GlobalError({ reset }: ErrorPageProps) {
	return (
		<main className={styles.Error}>
			<h1>Ha ocurrido un error</h1>
			<Image src='/images/error.png' alt='Error' width={500} height={500} />
			<p>Al parecer ha ocurrido un error, pero no te sientas mal</p>
			<button onClick={reset}>Volver a intentar</button>
		</main>
	)
}

export default GlobalError
