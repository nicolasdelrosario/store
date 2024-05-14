import { ProductsWrapper } from 'app/components/store'
import { getProducts } from 'app/services/shopify'

type CategoriesProps = {
	params: {
		categories: string[]
	}
}

async function CategoriesPage(props: CategoriesProps) {
	const products = await getProducts()
	const { categories } = props.params

	return <ProductsWrapper products={products} />
}

export default CategoriesPage
