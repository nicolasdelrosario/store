import { Hero, Description } from 'app/components/home'

type Props = {
	children: React.ReactNode
}
function HomeLayout({ children }: Props) {
	return (
		<div>
			<Hero />
			<Description />
			{children}
		</div>
	)
}

export default HomeLayout
