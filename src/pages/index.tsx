import Head from 'next/head'
import Link from 'next/link'
import Menu from '../components/Menu'

function Home() {
	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<main>
				<Menu />
				<section className='flex items-center justify-between p-5 mt-5 max-w-7xl w-full mx-auto sm:p-10'>
					<div>
						<h1 className='text-5xl  text-white'>
							<span className='block font-semibold text-pink-700'>
								Implemente
							</span>
							o seu futuro global
							<span className='block'> agora!</span>
						</h1>
						<p className='mt-5 text-xl max-w-md text-white'>
							Domine as tecnologias utilizadas pelas empresas mais inovadoras do
							mundo e encare seu novo desafio profissional, evoluindo em
							comunidade com os melhores experts.
						</p>
						<Link
							href='/cadastro'
							passHref>
							<button className='mt-5 px-10 py-1 rounded-full transition text-white bg-pink-700 hover:bg-pink-900'>
								Começar agora
							</button>
						</Link>
					</div>
					<figure className='hidden md:block'>
						<img
							src='/banner.png'
							alt='Banner'
						/>
					</figure>
				</section>
			</main>
		</>
	)
}

export default Home