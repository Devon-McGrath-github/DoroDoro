import Link from 'next/link'
import Sidebar from '../Sidebar'

const NavBar = () => {
	return (
		<nav className='fixed w-full bg-skin-primary flex flex-row items-center justify-between p-5'>
			<Link className='font-sans text-xl font-semibold' href='/'>
				DoroDoro
			</Link>
			<Sidebar />
		</nav>
	)
}

export default NavBar
