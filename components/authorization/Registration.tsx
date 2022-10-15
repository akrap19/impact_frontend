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

const Registration = () => {
	const [isOpen, setIsOpen] = useState(false)
	const { addSignUp } = useContext(AuthorizationContext)
	const { user } = useContext(UserContext)
	const { viewport } = useThree()
	const [values, setValues] = useState<State>({
		user: undefined,
		password: undefined
	})

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault()
		addSignUp({ username: values.user, password: values.password, wallet: user?.wallet })
	}

	const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
		setValues({ ...values, [prop]: event.target.value })
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
						onChange={handleChange('user')}
						className='name-input'
						type='text'
						placeholder='user'
						name='user'></Form.Control>
					<Form.Control
						onChange={handleChange('password')}
						className='email-input'
						type='text'
						placeholder='password'
						name='password'></Form.Control>
					{
						// @ts-ignore
						<Button className='submit-btn' type='submit' variant='primary'>
							Register
						</Button>
					}
				</Form.Group>
			</Form>
		</Html>
	)
}

export default Registration
