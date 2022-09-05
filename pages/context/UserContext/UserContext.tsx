import { createContext, useState } from 'react'
import { IUser } from './models/User'
import { UserContextState } from './types'

const contextDefaultValues: UserContextState = {
	user: undefined,
	setUser: () => {},
	getUser: () => {},
	clearUser: () => {}
}

export const UserContext = createContext<UserContextState>(contextDefaultValues)

const UserProvider = ({ children }: any) => {
	const [user, setUserState] = useState<IUser | undefined>(undefined)

	const setUser = (user: IUser) => {
		localStorage.setItem('wallet', user.wallet)
		setUserState({ wallet: user.wallet })
	}

	const getUser = () => {
		const wallet = localStorage.getItem('wallet')
		if (wallet !== null) {
			setUserState({ wallet })
		}
	}

	const clearUser = () => {
		setUserState(undefined)
		localStorage.removeItem('wallet')
	}

	return (
		<UserContext.Provider
			value={{
				user,
				setUser,
				getUser,
				clearUser
			}}>
			{children}
		</UserContext.Provider>
	)
}

export default UserProvider
