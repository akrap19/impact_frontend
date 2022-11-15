import { Euler, useLoader, Vector3 } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

interface IHemisphereStateProps {
	textureImage: string
	position: Vector3 | undefined
	rotation: Euler | undefined
}

const Hemisphere = (props: IHemisphereStateProps) => {
	const sphereRef: any = useRef()
	const repeatX = 2
	const repeatY = 1

	const base = useLoader(THREE.TextureLoader, props.textureImage)
	base.wrapS = THREE.RepeatWrapping
	base.wrapT = THREE.RepeatWrapping
	base.repeat.set(repeatX, repeatY)

	return (
		<mesh ref={sphereRef} position={props.position} rotation={props.rotation} scale={0.7}>
			<sphereGeometry args={[1.1, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
			<meshPhysicalMaterial map={base} />
		</mesh>
	)
}

export default Hemisphere
