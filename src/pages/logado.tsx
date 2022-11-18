import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { getSession, signOut, useSession } from 'next-auth/react'
import Head from 'next/head'
import Menu from '../components/Menu'

export const getServerSideProps: GetServerSideProps = async (
	context: GetServerSidePropsContext
) => {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

	return {
		props: { session }
	}
}

function Logado() {
	const { data: session } = useSession()
	console.log(session)

	return (
		<>
			<Head>
				<title>Feed</title>
			</Head>
			<Menu />
			<section className='p-5'>
				<h1 className='text-3xl text-white'>Feed</h1>
				<p className='text-2xl text-white'>Bem vindo, {session?.user.name} !</p>
        <button onClick={() => signOut()} className='mt-5 transition px-10 rounded-full text-white bg-pink-700 hover:bg-pink-900'>Sair</button>
			</section>
		</>
	)
}

export default Logado