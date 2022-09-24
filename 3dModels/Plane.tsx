import { useLoader, Vector3 } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

interface IPlaneStateProps {
	onClick?: () => void
	position?: Vector3 | undefined
}

const Plane = (props: IPlaneStateProps) => {
	const planeRef: any = useRef()

	return (
		<mesh ref={planeRef} position={props.position} rotation={[0.1, -0.3, 0]} onClick={props.onClick}>
			<planeGeometry args={[7, 1.3]} />
			<meshPhysicalMaterial color={'#5441C1'} />
		</mesh>
	)
}

export default Plane
