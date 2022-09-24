import { Text3D } from '@react-three/drei'
import { Vector3 } from 'three'

interface IWhitePaper {
	position?: Vector3 | undefined
}

const WhitePaper = (props: IWhitePaper) => {
	return (
		<Text3D
			position={props.position}
			rotation={[-0.9, 2.5, 13.45]}
			curveSegments={32}
			bevelEnabled
			bevelSize={0.04}
			bevelThickness={0.1}
			height={0.5}
			lineHeight={0.6}
			size={0.4}
			font='/Vampiro One_Regular.json'>
			{`White paper`}
			<meshNormalMaterial />
		</Text3D>
	)
}

export default WhitePaper
