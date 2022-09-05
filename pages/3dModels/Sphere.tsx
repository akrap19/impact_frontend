import { useLoader, useThree, Vector3 } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

interface ISphereStateProps {
	onClick: () => void
	onPointerEnter: () => void
	onPointerLeave: () => void
	textureImage: string
	position?: Vector3 | undefined
}

const Sphere = (props: ISphereStateProps) => {
	const [hovered, setHovered] = useState(false)
	const sphereRef: any = useRef()
	const repeatX = 2
	const repeatY = 1

	useEffect(() => {
		document.body.style.cursor = hovered ? 'pointer' : 'auto'
	}, [hovered])

	const base = useLoader(THREE.TextureLoader, props.textureImage)
	base.wrapS = THREE.RepeatWrapping
	base.wrapT = THREE.RepeatWrapping
	base.repeat.set(repeatX, repeatY)

	return (
		<mesh
			ref={sphereRef}
			position={props.position}
			rotation={[0.1, -0.3, 0]}
			onClick={props.onClick}
			onPointerEnter={props.onPointerEnter}
			onPointerLeave={props.onPointerLeave}
			onPointerOver={() => setHovered(true)}
			onPointerOut={() => setHovered(false)}>
			<sphereGeometry args={[1.1, 36, 36]} />
			<meshPhysicalMaterial map={base} />
		</mesh>
	)
}

export default Sphere
