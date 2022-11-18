import * as Yup from 'yup'

const UserSchemaValidation = Yup.object().shape({
	email: Yup.string()
		.email('Insira um email válido')
		.required('Email obrigatório'),
	password: Yup.string()
		.min(6, 'Senha mínima de 6 digitos')
		.required('Senha obrigatória'),
	nome: Yup.string()
		.min(5, 'Nome deve ter mais de 5 digitos')
		.required('Nome obrigatório')
})

export default UserSchemaValidation