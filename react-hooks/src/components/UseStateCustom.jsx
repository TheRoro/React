import React from 'react'
import { useForm } from '../hooks/useForm'

const UseStateCustom = () => {
	const [values, handleChange] = useForm({ email: '', password: '' })

	return (
		<div>
			<input name='email' value={values.email} onChange={handleChange} />
			<input
				type='password'
				name='password'
				value={values.password}
				onChange={handleChange}
			/>
		</div>
	)
}

export default UseStateCustom
