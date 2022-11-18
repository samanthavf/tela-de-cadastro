import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { getSession } from 'next-auth/react'
import React from 'react'
import Formulario from '../components/Formulario'
import Menu from '../components/Menu'

export const getServerSideProps: GetServerSideProps = async (
	context: GetServerSidePropsContext
) => {
  const session = await getSession(context)
  
  if (session) {
    return {
      redirect: {
        destination: '/logado',
        permanent: false
      }
    }
  }

	return {
		props: { user: '' }
	}
}

function Cadastro() {
	return (
		<>
			<Menu />
			<div className='flex items-center justify-around mx-auto mt-20 max-w-7xl'>
				<p className='text-5xl max-w-lg hidden md:block text-white'>
					A plataforma para você aprender com experts, dominar as principais
					tecnologias e entrar mais rápido nas empresas mais desejadas.
				</p>
				<Formulario />
			</div>
		</>
	)
}

export default Cadastro