type LayoutProps = {
	children: React.ReactNode
}

function layout({ children }: LayoutProps) {
	return (
		<main>
			<nav>Navegación de las categorías</nav>
			{children}
		</main>
	)
}

export default layout
