import { PublicKey } from '@solana/web3.js'
import { useContext, useState } from 'react'
import Plane from '../../3dModels/Plane'
import Sphere from '../../3dModels/Sphere'
import { UserContext } from '../../context/UserContext/UserContext'
import { getProvider } from '../../utils'
import { Text, Text3D } from '@react-three/drei'
import { useThree } from '@react-three/fiber'

const LoginLogOut = () => {
	const { user } = useContext(UserContext)
	const { setUser } = useContext(UserContext)
	const { clearUser } = useContext(UserContext)
	const [logOutText, setLogOutText] = useState<string>('')
	const provider = getProvider()
	const { viewport } = useThree()
	let text3dPosition = user ? viewport.width / (logOutText !== '' ? 1.97 : 2.13) : 21.1

	const handleAccessSolana = async () => {
		if (!user && provider) {
			provider.on('connect', (publicKey: PublicKey) => {
				console.log('Connected to account', publicKey.toBase58())
				setUser({ wallet: publicKey.toBase58() })
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
		clearUser()
	}

	const test = () => {
		setLogOutText(logOutText ? '' : 'Log Out')
	}

	return (
		<>
			<Sphere
				position={[user ? viewport.width / 2.5 : viewport.width / 1.6, 8.02, -14.3]}
				textureImage={'/phantom.png'}
				onPointerEnter={test}
				onPointerLeave={test}
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
