import { Text3D } from '@react-three/drei'
import { Vector3 } from 'three'

interface IRoadMap {
	position?: Vector3 | undefined
}

const RoadMap = (props: IRoadMap) => {
	return (
		<Text3D
			position={props.position}
			rotation={[-1.1, 1.7, 13.65]}
			curveSegments={32}
			bevelEnabled
			bevelSize={0.04}
			bevelThickness={0.1}
			height={0.5}
			lineHeight={0.6}
			size={0.4}
			font='/Vampiro One_Regular.json'>
			{`Road map`}
			<meshNormalMaterial />
		</Text3D>
	)
}

export default RoadMap
