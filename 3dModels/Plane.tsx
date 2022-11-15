import { Color, Euler, useLoader, Vector3 } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

interface IPlaneStateProps {
	onClick?: () => void
	position?: Vector3 | undefined
	rotation?: Euler | undefined
	args?: any
	color?: number
}

const Plane = (props: IPlaneStateProps) => {
	const planeRef: any = useRef()

	return (
		<mesh ref={planeRef} position={props.position} rotation={props.rotation} onClick={props.onClick}>
			<planeGeometry args={props.args} />
			<meshPhysicalMaterial color={new THREE.Color(props.color)} />
		</mesh>
	)
}

export default Plane
