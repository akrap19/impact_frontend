import type { NextPage } from 'next'
import 'bootstrap/dist/css/bootstrap.css'
import { Canvas } from '@react-three/fiber'
import CanvasContent from './CanvasContent'
import ImpactLogo from './../asset/Logo_auto_crveni.png'
import Image from 'next/image'

const Home: NextPage = () => {
	return (
		<div className='home-container'>
			<label className='title-label'>
				<Image className='title-label' src={ImpactLogo} alt='logo' />
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
