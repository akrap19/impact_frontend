import { Html } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { FormEvent, useContext, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { AuthorizationContext } from '../../context/AuthorizationContext/AuthorizationContext'
import { UserContext } from '../../context/UserContext/UserContext'

interface State {
	user?: string
	password?: string
}

interface ValidationState {
	user?: string
	password?: string
}

const Registration = () => {
	const [isOpen, setIsOpen] = useState(false)
	const { addSignUp } = useContext(AuthorizationContext)
	const { user } = useContext(UserContext)
	const { viewport } = useThree()
	const [values, setValues] = useState<State>({
		user: undefined,
		password: undefined
	})
	const [isValid, setIsValid] = useState<State>({
		user: undefined,
		password: undefined
	})

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault()
		addSignUp({ username: values.user, password: values.password, wallet: user?.wallet })
	}

	const handleValidationAndSetValues = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
		const specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/
		const lettersAndNumbers = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=\S+$).{6,200}$/
		const capitalLetters = /^(?=.*[A-Z])(?=\S+$).{6,200}$/

		setValues({ ...values, [prop]: event.target.value })
		if (prop === 'user') {
			event.target.value.length < 2 || event.target.value.length > 9
				? setIsValid({ ...isValid, [prop]: 'false' })
				: setIsValid({ ...isValid, [prop]: 'true' })
		}
		if (prop === 'password') {
			event.target.value.length < 6 ||
			!lettersAndNumbers.test(event.target.value) ||
			!specialCharacters.test(event.target.value) ||
			!capitalLetters.test(event.target.value)
				? setIsValid({ ...isValid, [prop]: 'false' })
				: setIsValid({ ...isValid, [prop]: 'true' })
		}
	}

	return (
		<Html
			className='content'
			rotation={[0, 2.8, 0]}
			position={[viewport.width / 0.307, 33.5, -258.3]}
			transform
			occlude>
			<Form className='signup-form' onSubmit={handleSubmit}>
				<Form.Group>
					<Form.Control
						onChange={handleValidationAndSetValues('user')}
						className={`name-input ${isValid.user === 'false' && 'error-input'}`}
						type='text'
						placeholder='user'
						name='user'></Form.Control>
					{isValid.user === 'false' && (
						<label id='emailHelp' className='text-danger'>
							{'Length is beetween 2 and 9'}
						</label>
					)}
					<Form.Control
						onChange={handleValidationAndSetValues('password')}
						className={`password-input ${isValid.password === 'false' && 'error-input'}`}
						type='password'
						placeholder='password'
						name='password'></Form.Control>
					{isValid.password === 'false' && (
						<label id='emailHelp' className='text-danger'>
							{'Min length is 6 with one special charater, number and upper case letter'}
						</label>
					)}
					{
						// @ts-ignore
						<Button
							className='submit-btn'
							type='submit'
							variant='primary'
							disabled={isValid.user === 'false' || isValid.password === 'false' || !values.user || !values.password}>
							Register
						</Button>
					}
				</Form.Group>
			</Form>
		</Html>
	)
}

export default Registration
