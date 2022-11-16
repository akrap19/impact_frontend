import {
	Stars,
	Text3D,
	Float,
	ContactShadows,
	Environment,
	Lightformer,
	Effects,
	OrbitControls
} from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import { MathUtils, PerspectiveCamera, Quaternion, Vector3 } from 'three'
import Aventador from './3dModels/Aventador'
import LoginLogOut from './components/authorization/LoginLogOut'
import Registration from './components/authorization/Registration'
import ImCloud from './components/common/ImCloud'
import Navigation3DText from './components/navigation/Navigation3DText'
import RoadMap from './components/roadMap/RoadMap'
import WhitePaper from './components/whitePaper/WhitePaper'
import Compose from './context/Compose'
import { Providers } from './context/Providers'
import { IUser } from './context/UserContext/models/User'

interface ICanvasStateProps {
	goHome: boolean
	setGoHome: Dispatch<SetStateAction<boolean>>
}

const CanvasContent = (props: ICanvasStateProps) => {
	const { viewport } = useThree()
	const p = new Vector3()
	const q = new Quaternion()
	const c: any = new PerspectiveCamera()
	const state = useThree()
	const [clicked, setClicked] = useState<any>(null)
	const [connected, setConncted] = useState<boolean>(false)
	const [user, setUser] = useState<IUser | undefined>()
	const [showWhitePaper, setShowWhitePaper] = useState<boolean>(false)
	const [showRoadMap, setShowRoadMap] = useState<boolean>(false)
	const [hovered, setHovered] = useState<boolean>(true)

	useEffect(() => {
		state.camera.lookAt(0, 0, 35)
	}, [])

	useFrame((state, dt) => {
		const registerFormPosition = new Vector3(viewport.width / 0.29, 35, -275.3)
		const homePosition = new Vector3(0, 0, 35)
		const whitePaperPosition = new Vector3(-10, 0, 0)
		const roadMapPosition = new Vector3(10, 0, 0)

		if (clicked !== null) {
			state.camera.position.lerp(registerFormPosition, MathUtils.damp(0, 1, 5, dt))
			setTimeout(() => {
				setClicked(null)
			}, 2000)
		}

		if (props.goHome) {
			state.camera.position.lerp(homePosition, MathUtils.damp(0, 1, 5, dt))
			setTimeout(() => {
				props.setGoHome(false)
			}, 2000)
		}

		if (showWhitePaper) {
			state.camera.position.lerp(whitePaperPosition, MathUtils.damp(0, 1, 5, dt))
			setTimeout(() => {
				setShowWhitePaper(false)
			}, 2000)
		}

		if (showRoadMap) {
			state.camera.position.lerp(roadMapPosition, MathUtils.damp(0, 1, 5, dt))
			setTimeout(() => {
				setShowRoadMap(false)
			}, 2000)
		}
	})

	return (
		<Compose components={Providers}>
			<color attach='background' args={['#0d0d33']} />
			<Stars radius={150} depth={50} count={50000} factor={4} saturation={0} />
			<Text3D
				position={[viewport.width / -1.5, 8.02, -15.63]}
				rotation={[0.4, 0.4, -0.1]}
				curveSegments={32}
				bevelEnabled
				bevelSize={0.04}
				bevelThickness={0.1}
				height={0.5}
				lineHeight={0.6}
				size={1.8}
				font='/Vampiro One_Regular.json'>
				{`Car\nshooting\nweb3\ngame`}
				<meshNormalMaterial />
			</Text3D>
			<Float
				speed={1} // Animation speed, defaults to 1
				rotationIntensity={1} // XYZ rotation intensity, defaults to 1
				floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
				floatingRange={[1, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
			>
				<mesh scale={5} position={[6.5, -6.02, -14.63]} rotation={[-Math.PI / 2.3, 0, Math.PI / 2.5]}>
					<ringGeometry args={[0.9, 1, 9, 2]} />
					<meshStandardMaterial color='grey' roughness={0.75} />
				</mesh>
				<Aventador rotation={[0.2, 100, 0]} position={[6.5, -6.02, -14.3]} scale={3.015} />
			</Float>
			<LoginLogOut setConncted={setConncted} setUser={setUser} />
			{/* <mesh rotation={[1, 100, 0]} position={[viewport.width / 0.34, 23.52, -214.3]}> */}
			{connected && (
				<>
					<Registration />
					<Text3D
						position={[viewport.width / 0.291, 35.8, -255.3]}
						rotation={[0, 2.8, 0]}
						curveSegments={32}
						bevelEnabled
						bevelSize={0.04}
						bevelThickness={0.1}
						height={0.5}
						lineHeight={0.6}
						size={0.4}
						font='/Vampiro One_Regular.json'>
						{`Registration for game`}
						<meshNormalMaterial />
					</Text3D>
					<ImCloud position={[viewport.width / 0.3, 30, -235.3]} clicked={clicked} setClicked={setClicked} />
					<ImCloud position={[viewport.width / 0.34, 30, -235.3]} clicked={clicked} setClicked={setClicked} />
					<ImCloud position={[viewport.width / 0.39, 30, -235.3]} clicked={clicked} setClicked={setClicked} />
					<Text3D
						position={[viewport.width / 2.19, 5.7, -15.63]}
						rotation={[0.1, -0.3, 0]}
						curveSegments={32}
						bevelEnabled
						bevelSize={0.04}
						bevelThickness={0.1}
						height={0.5}
						lineHeight={0.7}
						size={0.6}
						font='/Inter_regular.json'>
						{user?.username ?? `Registration\nfor game`}
						<meshStandardMaterial color='red' />
					</Text3D>
				</>
			)}
			{
				<Navigation3DText
					width={viewport.width}
					// @ts-ignore
					rotation={[0, -0.3, 0]}
					textIndex={0}
					textColor={'white'}
					showPage={setShowWhitePaper}
				/>
			}
			<WhitePaper setHovered={setHovered} />
			{
				<Navigation3DText
					width={viewport.width}
					// @ts-ignore
					rotation={[0, -0.4, 0]}
					textIndex={1}
					textColor={'red'}
					showPage={setShowRoadMap}
				/>
			}
			{/* <RoadMap position={new Vector3(-30, 6.6, 15)} /> */}
			<hemisphereLight intensity={0.5} />
			<ContactShadows
				resolution={1024}
				frames={1}
				position={[0, -1.02, -0.63]}
				scale={15}
				blur={0.5}
				opacity={1}
				far={20}
			/>
			<Environment resolution={512}>
				{/* Ceiling */}
				<Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -9]} scale={[10, 1, 1]} />
				<Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -6]} scale={[10, 1, 1]} />
				<Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -3]} scale={[10, 1, 1]} />
				<Lightformer
					form='ring'
					color='blue'
					intensity={2}
					rotation-x={Math.PI / 2}
					position={[0, 4, 0]}
					scale={[10, 1, 1]}
				/>
				<Lightformer
					form='ring'
					color='red'
					intensity={2}
					rotation-x={Math.PI / 2}
					position={[0, 4, 3]}
					scale={[10, 1, 1]}
				/>
				<Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 6]} scale={[10, 1, 1]} />
				<Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 9]} scale={[10, 1, 1]} />
				{/* Sides */}
				<Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-50, 2, 0]} scale={[100, 2, 1]} />
				<Lightformer
					form='ring'
					color='red'
					intensity={23}
					rotation-y={-Math.PI / 2}
					position={[50, 2, 0]}
					scale={[100, 2, 1]}
				/>
				{/* Key */}
				<Lightformer
					form='ring'
					color='red'
					intensity={15}
					scale={2}
					position={[10, 5, 10]}
					onUpdate={self => self.lookAt(0, 0, 0)}
				/>
			</Environment>
			<Effects />
			<OrbitControls enablePan={true} enableZoom={hovered} maxDistance={1000} />
		</Compose>
	)
}

export default CanvasContent
