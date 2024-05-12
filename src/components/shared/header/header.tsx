import Link from 'next/link'

function Header() {
	return (
		<header>
			<nav>
				<ul>
					<li>
						<Link href='/'>Home</Link>
					</li>
					<li>
						<Link href='/store'>Store</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
