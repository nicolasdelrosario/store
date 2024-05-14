import { ProductCard } from '../index'
import styles from './products-wrapper.module.css'

interface ProductsWrapperProps {
	products: ProductType[]
}

function ProductsWrapper({ products }: ProductsWrapperProps) {
	return (
		<div className={styles.ProductsWrapper}>
			{products.map(product => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	)
}

export default ProductsWrapper
