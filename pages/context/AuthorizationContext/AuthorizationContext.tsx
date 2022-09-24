import { AxiosResponse } from 'axios'
import { createContext, useState } from 'react'
import { instance } from '../Instance'
import { IAuthorization } from './models/Authorization'
import { AuthorizationContextState } from './types'

const contextDefaultValues: AuthorizationContextState = {
	addSignUp: () => {}
}

export const AuthorizationContext = createContext<AuthorizationContextState>(contextDefaultValues)

const AuthorizationProvider = ({ children }: any) => {
	const addSignUp = (signUp: IAuthorization) => {
		instance
			.post('http://localhost:4000/api/users/signup', {
				username: signUp.username,
				password: signUp.password,
				wallet: signUp.wallet
			})
			.then((response: AxiosResponse) => {
				if (response.status === 200) {
					console.log('request gone thru')
				}
			})
	}

	return (
		<AuthorizationContext.Provider
			value={{
				addSignUp
			}}>
			{children}
		</AuthorizationContext.Provider>
	)
}

export default AuthorizationProvider
