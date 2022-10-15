import type { NextPage } from 'next'
import 'bootstrap/dist/css/bootstrap.css'
import { Canvas, useThree } from '@react-three/fiber'
import ImpactLogo from './../asset/Logo_auto_crveni.png'
import Image from 'next/image'
import CanvasContent from '../CanvasContent'
import { useEffect, useState } from 'react'

const Home: NextPage = () => {
	const [goHome, setGoHome] = useState<boolean>(false)

	// useEffect(() => {
	// 	goHome && setGoHome(false)
	// }, [goHome])

	return (
		<div className='home-container'>
			<label className='logo-container'>
				<Image className='logo' src={ImpactLogo} alt='logo' onClick={() => setGoHome(true)} />
			</label>
			<Canvas
				gl={{ logarithmicDepthBuffer: true, antialias: true }}
				dpr={[1, 1.5]}
				camera={{ position: [0, 0, 35], fov: 25 }}>
				<CanvasContent goHome={goHome} setGoHome={setGoHome} />
			</Canvas>
		</div>
	)
}

export default Home
