import { AxiosResponse } from 'axios'
import { createContext, useEffect, useState } from 'react'
import { instance } from '../Instance'
import { IUser } from './models/User'
import { UserContextState } from './types'

const contextDefaultValues: UserContextState = {
	user: undefined,
	setUserWallet: () => {},
	getUserWallet: () => {},
	clearUserWallet: () => {},
	userAccount: undefined,
	getUserAccount: () => {}
}

export const UserContext = createContext<UserContextState>(contextDefaultValues)

const UserProvider = ({ children }: any) => {
	const [user, setUserState] = useState<IUser | undefined>(undefined)
	const [userAccount, setUserAccount] = useState<IUser | undefined>(undefined)

	useEffect(() => {
		getUserAccount()
	}, [user])

	const setUserWallet = (user: IUser) => {
		localStorage.setItem('wallet', user.wallet)
		setUserState({ wallet: user.wallet })
		getUserWallet()
	}

	const getUserWallet = () => {
		const wallet = localStorage.getItem('wallet')
		if (wallet !== null) {
			setUserState({ wallet })
		}
	}

	const clearUserWallet = () => {
		setUserState(undefined)
		localStorage.removeItem('wallet')
	}

	const getUserAccount = () => {
		if (user) {
			instance.get('http://localhost:4000/api/users/' + user.wallet).then((response: AxiosResponse) => {
				if (response.status === 200) {
					setUserAccount(response.data.user)
				}
			})
		}
	}

	return (
		<UserContext.Provider
			value={{
				user,
				setUserWallet,
				getUserWallet,
				clearUserWallet,
				userAccount,
				getUserAccount
			}}>
			{children}
		</UserContext.Provider>
	)
}

export default UserProvider
