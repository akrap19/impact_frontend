import { PublicKey } from '@solana/web3.js'
import { Dispatch, SetStateAction, useContext, useEffect, useState } from 'react'
import Plane from '../../3dModels/Plane'
import Sphere from '../../3dModels/Sphere'
import { getProvider } from '../../../utils'
import { Text3D } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { IUser } from '../../../context/UserContext/models/User'
import { UserContext } from '../../../context/UserContext/UserContext'

interface ILoginLogOutStateProps {
	setConncted: Dispatch<SetStateAction<boolean>>
	setUser: Dispatch<SetStateAction<IUser | undefined>>
}

const LoginLogOut = (props: ILoginLogOutStateProps) => {
	const { user } = useContext(UserContext)
	const { setUserWallet } = useContext(UserContext)
	const { clearUserWallet } = useContext(UserContext)
	const [logOutText, setLogOutText] = useState<string>('')
	const provider = getProvider()
	const { viewport } = useThree()
	const { userAccount } = useContext(UserContext)
	let text3dPosition = user ? viewport.width / (logOutText !== '' ? 1.97 : 2.13) : 21.1

	useEffect(() => {
		if (userAccount) {
			props.setUser(userAccount)
		}
	}, [userAccount])

	const handleAccessSolana = async () => {
		if (!user && provider) {
			provider.on('connect', (publicKey: PublicKey) => {
				setUserWallet({ wallet: publicKey.toBase58() })
				props.setConncted(true)
			})
			provider.connect().catch(error => {
				console.log('login error', error)
			})
		}
	}

	const handleFormatWalletAddress = (walletAddress: string) => {
		const firstThree = walletAddress.substring(0, 3)
		const lastThree = walletAddress.substring(walletAddress.length - 3)

		return firstThree + '...' + lastThree
	}

	const handleLogOut = () => {
		props.setConncted(false)
		clearUserWallet()
	}

	const handleLogOutText = () => {
		setLogOutText(logOutText ? '' : 'Log Out')
	}

	return (
		<>
			<Sphere
				position={[user ? viewport.width / 2.5 : viewport.width / 1.6, 8.02, -14.3]}
				textureImage={'/phantom.png'}
				onPointerEnter={handleLogOutText}
				onPointerLeave={handleLogOutText}
				onClick={user ? handleLogOut : handleAccessSolana}
			/>
			{user && (
				<Text3D
					position={[text3dPosition, logOutText !== '' ? 7.77 : 7.7, -14.3]}
					rotation={[0.1, -0.3, 0]}
					curveSegments={32}
					bevelEnabled
					bevelSize={0.04}
					bevelThickness={0.05}
					height={0.5}
					lineHeight={0.6}
					size={0.7}
					font='/Inter_regular.json'>
					{logOutText ? logOutText : handleFormatWalletAddress(user.wallet)}
					<meshStandardMaterial color='white' />
				</Text3D>
			)}
			{user && <Plane position={[user ? viewport.width / 1.92 : 20.8, 8.02, -13.7]} />}
		</>
	)
}

export default LoginLogOut
