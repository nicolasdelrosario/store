type CategoriesProps = {
	params: {
		categories: string[]
	}
}

function CategoriesPage(props: CategoriesProps) {
	const { categories } = props.params
	console.log(categories)
	return <div>Esta es la categoria {categories}</div>
}

export default CategoriesPage
