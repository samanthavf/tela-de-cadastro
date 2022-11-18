import Head from 'next/head'
import { Formik, Form, Field } from 'formik'
import UserSchemaValidation from '../../validation/UserSchemaValidation'
import { signIn } from 'next-auth/react'
import { IconeEmail, IconePassword, IconeUser } from '../../icons'

const Formulario = () => {
	return (
		<>
			<Head>
				<title>Cadastro</title>
			</Head>
			<div className='w-full sm:w-72'>
				<h1 className='text-3xl font-semibold text-center sm:text-left text-white'>
					Comece agora grátis
				</h1>
				<p className='mb-5 text-center sm:text-left text-white'>
					Crie sua conta e make the change._
				</p>
				<Formik
					validationSchema={UserSchemaValidation}
					onSubmit={(values) => console.log(values)}
					initialValues={{ email: '', password: '', nome: '' }}>
					{({ errors, touched }) => (
						<Form className='flex flex-col gap-2 w-full p-5 mx-auto sm:mx-0 sm:p-0 sm:w-60'>
							<div className='flex gap-1 border-b pb-1 px-1'>
								<figure className='h-6 w-6 text-pink-700'>{IconeUser}</figure>
								<Field
									id='nome'
									name='nome'
									type='text'
									placeholder='Nome completo'
									className='w-full outline-none bg-transparent text-white'
								/>
							</div>
							{errors.nome && touched.nome && (
								<p className='px-1 text-red-500'>{errors.nome}</p>
							)}

							<div className='flex gap-1 border-b pb-1 px-1'>
								<figure className='h-6 w-6 text-pink-700'>{IconeEmail}</figure>
								<Field
									id='email'
									name='email'
									type='email'
									placeholder='E-mail'
									className='w-full outline-none bg-transparent text-white'
								/>
							</div>
							{errors.email && touched.email && (
								<p className='px-1 text-red-500'>{errors.email}</p>
							)}

							<div className='flex gap-1 border-b pb-1 px-1'>
								<figure className='h-6 w-6 text-pink-700'>{IconePassword}</figure>
								<Field
									id='password'
									name='password'
									type='password'
									placeholder='Password'
									className='w-full outline-none bg-transparent text-white'
								/>
							</div>
							{errors.password && touched.password && (
								<p className='px-1 text-red-500'>{errors.password}</p>
							)}

							<button
								type='submit'
								className='mt-5 w-full p-1 rounded-full transition bg-pink-700 text-white hover:bg-pink-900'>
								Criar minha conta
							</button>
						</Form>
					)}
				</Formik>
				<p className='mt-5 text-center p-2 sm:p-0 sm:text-left text-white'>
					Ao clicar em "criar minha conta grátis", declaro que aceito as
					Políticas de Privacidade e os Termos de Uso da DIO.
				</p>
				<div className='flex gap-1 mt-5 justify-center sm:justify-start text-white'>
					<p>Entre com</p>
					<button
						onClick={() => signIn('github')}
						className='font-bold text-green-500'>
						Github
					</button>
				</div>
			</div>
		</>
	)
}

export default Formulario