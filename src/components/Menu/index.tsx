import React from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'

const Menu = () => {
	const { data: session } = useSession()
	const [openMenu, setOpenMenu] = React.useState(false)

	function showMenu() {
		setOpenMenu((prev) => !prev)
	}

	return (
		<header className='flex items-center justify-between px-14 py-3 h-16 relative bg-black'>
			<figure>
				<Link
					href='/'
					passHref>
					<img
						className='cursor-pointer'
						src='/logo-dio.png'
						alt='Logo Dio'
					/>
				</Link>
			</figure>

			{session?.user ? (
				<figure className='w-10 rounded-full'>
					<img
						src={session?.user.image}
						alt='User Image'
						className='rounded-full'
					/>
				</figure>
			) : (
				<nav className='text-white'>
					<div className='hidden gap-5 sm:flex'>
						<p>Home</p>
						<div className='flex gap-5'>
							<Link
								href='/cadastro'
								passHref>
								<button className='px-10 rounded-full transition bg-gray-600 hover:bg-gray-900'>
									Entrar
								</button>
							</Link>
							<Link
								href='/cadastro'
								passHref>
								<button className='px-10 rounded-full transition bg-gray-600 hover:bg-gray-900'>
									Cadastrar
								</button>
							</Link>
						</div>
					</div>

					<div className='sm:hidden'>
						<button
							onClick={showMenu}
							className='px-5 rounded-full transition bg-gray-600 hover:bg-gray-900'>
							Menu
						</button>
						<div
							className={`${
								openMenu ? 'flex' : 'hidden'
							} flex-col gap-5 p-5 rounded-md absolute right-5 top-20 bg-black`}>
							<Link
								href='/cadastro'
								passHref>
								<button className='px-5 rounded-full transition bg-gray-600 hover:bg-gray-900'>
									Entrar
								</button>
							</Link>
							<Link
								href='/cadastro'
								passHref>
								<button className='px-5 rounded-full transition bg-gray-600 hover:bg-gray-900'>
									Cadastrar
								</button>
							</Link>
						</div>
					</div>
				</nav>
			)}
		</header>
	)
}

export default Menu