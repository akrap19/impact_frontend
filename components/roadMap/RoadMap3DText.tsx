import { Text3D } from '@react-three/drei'
import { Euler, Vector3 } from '@react-three/fiber'
import Plane from '../../3dModels/Plane'

interface IRoadMap3DText {
	position?: Vector3
	rotation?: Euler
	planePosition?: Vector3
	planeRotation?: Euler
	planeArgs?: any
	text?: string
}

const RoadMap3DText = (props: IRoadMap3DText) => {
	return (
		<>
			{/* <Text3D
				position={props.position}
				rotation={props.rotation}
				curveSegments={32}
				bevelEnabled
				bevelSize={0.04}
				bevelThickness={0.1}
				height={0.2}
				lineHeight={0.7}
				size={0.4}
				font='/Inter_regular.json'>
				{props.text}
			</Text3D> */}
			{/* <Plane position={props.planePosition} rotation={props.planeRotation} args={props.planeArgs} /> */}
		</>
	)
}

export default RoadMap3DText
