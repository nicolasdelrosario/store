import Image from 'next/image'
import styles from './main-products.module.css'

type ProductProps = {
	id: number
	title: string
	images: Array<{ src: string }>
}

async function MainProducts() {
	const response = await fetch('http://localhost:3000/api')
	const { products } = await response.json()

	return (
		<section className={styles.MainProducts}>
			<h3>✨ New products released!</h3>
			<div className={styles.grid}>
				{products?.map((product: ProductProps) => {
					const imageSrc = product.images[0].src
					return (
						<article key={product.id}>
							<p>{product.title}</p>
							<Image
								src={imageSrc}
								fill
								alt={product.title}
								loading='eager'
								sizes='(100vw, 100vh)'
							/>
						</article>
					)
				})}
			</div>
		</section>
	)
}

export default MainProducts
