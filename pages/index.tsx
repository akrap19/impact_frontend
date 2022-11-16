import type { NextPage } from 'next'
import 'bootstrap/dist/css/bootstrap.css'
import { Canvas, useThree } from '@react-three/fiber'
import ImpactLogo from './../asset/Logo_auto_crveni.png'
import Image from 'next/image'
import CanvasContent from '../CanvasContent'
import { ToastContainer } from 'react-toastify'
import { useState } from 'react'
import Head from 'next/head'

const Home: NextPage = () => {
	const [goHome, setGoHome] = useState<boolean>(false)

	return (
		<div className='home-container'>
			<Head>
				<title>I M P A C T</title>
			</Head>
			<label className='logo-container'>
				<Image className='logo' src={ImpactLogo} alt='logo' onClick={() => setGoHome(true)} />
			</label>
			<Canvas
				gl={{ logarithmicDepthBuffer: true, antialias: true }}
				dpr={[1, 1.5]}
				camera={{ position: [0, 0, 35], fov: 25 }}>
				<CanvasContent goHome={goHome} setGoHome={setGoHome} />
			</Canvas>
			<ToastContainer />
		</div>
	)
}

export default Home
