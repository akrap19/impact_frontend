import type { NextPage } from 'next'
import 'bootstrap/dist/css/bootstrap.css'
import { Canvas } from '@react-three/fiber'
import ImpactLogo from './../asset/Logo_auto_crveni.png'
import Image from 'next/image'
import CanvasContent from '../CanvasContent'

const Home: NextPage = () => {
	return (
		<div className='home-container'>
			<label className='logo-container'>
				<Image className='logo' src={ImpactLogo} alt='logo' />
			</label>
			<Canvas
				gl={{ logarithmicDepthBuffer: true, antialias: true }}
				dpr={[1, 1.5]}
				camera={{ position: [0, 0, 35], fov: 25 }}>
				<CanvasContent />
			</Canvas>
		</div>
	)
}

export default Home
