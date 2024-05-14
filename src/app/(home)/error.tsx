'use client'

type ErrorProps = {
	error: Error
	reset: () => void
}

function Error({ error, reset }: ErrorProps) {
	return (
		<div>
			<h1>:c</h1>
			<p>Ha ocuriddo un error: {error.message}</p>
			<button onClick={reset}>Reintentar</button>
		</div>
	)
}

export default Error
