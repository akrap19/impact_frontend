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
import { useThree } from '@react-three/fiber'
import Aventador from './3dModels/Aventador'
import LoginLogOut from './components/authorization/LoginLogOut'
import UserProvider from './context/UserContext'

const CanvasContent = () => {
	const { viewport } = useThree()

	return (
		<UserProvider>
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
			<LoginLogOut />
			{/* <Capsule textureImage={'/phantom.png'} /> */}
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
			{/* We're building a cube-mapped environment declaratively.
Anything you put in here will be filmed (once) by a cubemap-camera
and applied to the scenes environment, and optionally background. */}
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
			<OrbitControls enablePan={true} enableZoom={true} maxDistance={1000} />
		</UserProvider>
	)
}

export default CanvasContent
