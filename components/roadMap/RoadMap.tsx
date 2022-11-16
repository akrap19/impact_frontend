import { Text3D } from '@react-three/drei'
import { Vector3 } from 'three'
import TurnRightSign from './../../3dModels/TurnRightSign'
import TurnLeftSign from './../../3dModels/TurnLeftSign'
import UpSign from './../../3dModels/UpSign'
import StopSign from './../../3dModels/StopSign'
import RoadMap3DText from './RoadMap3DText'
import Hemisphere from '../../3dModels/Hemisphere'

interface IRoadMap {
	position?: Vector3 | undefined
}

const RoadMap = (props: IRoadMap) => {
	return (
		<>
			<Text3D
				position={props.position}
				rotation={[-1.1, 1.7, 13.65]}
				curveSegments={32}
				bevelEnabled
				bevelSize={0.04}
				bevelThickness={0.1}
				height={0.5}
				lineHeight={0.6}
				size={1.2}
				font='/Vampiro One_Regular.json'>
				{`Road map`}
				<meshNormalMaterial />
			</Text3D>
			<RoadMap3DText
				position={[-29.97, 3.6, 13.2]}
				rotation={[-1.1, 1.9, 13.65]}
				planePosition={[-30, 3.4, 11.6]}
				planeRotation={[-1.1, 1.9, 13.65]}
				planeArgs={[3.8, 1.4]}
				text={`Realese of\nweb page`}
			/>
			{/* <UpSign position={[-34.8, -12.15, 17.8]} rotation={[-2.7, 1.5, 13.65]} scale={3.2} />
			<Hemisphere position={[-30, 3.35, 9.4]} rotation={[0.8, 0.1, 1.5]} textureImage={'/grey_light.png'} />
			<RoadMap3DText
				position={[-29.6, 3.49, 1]}
				rotation={[-1.1, 1.6, 13.65]}
				planePosition={[-29.4, 3.35, 0]}
				planeRotation={[-1.1, 1.6, 13.65]}
				planeArgs={[4.4, 1.4]}
				text={`Community\nlounch`}
			/>
			<UpSign position={[-36.8, -11.62, 9.4]} rotation={[-2.7, 1.7, 13.65]} scale={3.2} />
			<Hemisphere position={[-29.3, 3.35, 2.1]} rotation={[-1.4, 0.1, 1.5]} textureImage={'/grey_light.png'} />
			<RoadMap3DText
				position={[-29.4, 3.38, -9.9]}
				rotation={[-1.1, 1.6, 13.66]}
				planePosition={[-29.2, 3.25, -11.9]}
				planeRotation={[-1.1, 1.6, 13.65]}
				planeArgs={[4.4, 1.4]}
				text={`Realese of\nbeta`}
			/>
			<TurnRightSign position={[-48, -11.2, -8.2]} rotation={[-2.65, 1.7, 13.63]} scale={3.2} />
			<Hemisphere position={[-29, 3.25, -13.73]} rotation={[-1.5, 0.1, 1.5]} textureImage={'/grey_light.png'} />
			<RoadMap3DText
				position={[-30.2, -1.05, -10.2]}
				rotation={[-1.1, 1.6, 13.65]}
				planePosition={[-30, -0.9, -12.3]}
				planeRotation={[-1.1, 1.6, 13.65]}
				planeArgs={[4.5, 1.1]}
				text={`Full realese`}
			/>
			<TurnRightSign position={[-49, 8.2, -0.4]} rotation={[-2.65, 1.7, 12.05]} scale={3.3} />
			<Hemisphere position={[-30, -0.9, -14.25]} rotation={[-1.4, 0.1, 1.5]} textureImage={'/grey_light.png'} />
			<RoadMap3DText
				position={[-30.3, -1.15, 1]}
				rotation={[-1.1, 1.6, 13.66]}
				planePosition={[-30.1, -1, -0.1]}
				planeRotation={[-1.1, 1.6, 13.65]}
				planeArgs={[3.8, 1.2]}
				text={`Token sale`}
			/>
			<UpSign position={[-34, 14.9, -6]} rotation={[-2.7, 1.7, 10.548]} scale={3.2} />
			<Hemisphere position={[-30, -1, 2.05]} rotation={[-1.4, 0.1, 1.5]} textureImage={'/grey_light.png'} />
			<RoadMap3DText
				position={[-29.9, -1.15, 11.6]}
				rotation={[-1.1, 1.9, 13.65]}
				planePosition={[-30, -1, 9.5]}
				planeRotation={[-1.1, 1.9, 13.65]}
				planeArgs={[5.5, 1.2]}
				text={`Weapon mutation`}
			/>
			<TurnLeftSign position={[-41, 15.5, 4]} rotation={[-2.65, 1.7, -2.05]} scale={3.2} />
			<Hemisphere position={[-29.5, -1.02, 12.59]} rotation={[-1.9, 0.1, 1.5]} textureImage={'/grey_light.png'} />
			<RoadMap3DText
				position={[-29.9, -5.15, 11.3]}
				rotation={[-1.1, 1.9, 13.65]}
				planePosition={[-30, -5, 10.1]}
				planeRotation={[-1.1, 1.9, 13.65]}
				planeArgs={[5.2, 1.2]}
				text={`Tournaments`}
			/>
			<StopSign position={[-38.5, 7.9, 29.8]} rotation={[-2.65, 1.7, 12.1]} scale={3} />
			<Hemisphere position={[-29.2, -5.01, 12.16]} rotation={[-1.9, 0.1, 1.5]} textureImage={'/grey_light.png'} /> */}
		</>
	)
}

export default RoadMap
