import { Text3D } from '@react-three/drei'
import { useThree, useFrame } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import { Euler, MathUtils, PerspectiveCamera, Quaternion, Vector3 } from 'three'

interface INavigation3Dtext {
	width: number
	rotation?: Euler
	textIndex: number
	textColor?: string
}

const Navigation3DText = (props: INavigation3Dtext) => {
	const [hovered, setHovered] = useState(false)
	const [clicked, setClicked] = useState<any>(null)
	const { viewport } = useThree()
	const [navigationText, setNavigationText] = useState<string[]>(['W', 'R'])
	const planeRef: any = useRef()
	const currentMenuItem = props.textIndex === 0
	const itemTitleLength = navigationText[props.textIndex].length === 1
	const cameraPosition = currentMenuItem
		? new Vector3(viewport.width / 2.49, -14, -5)
		: new Vector3(viewport.width / 1.29, 2, -1.3)
	const p = new Vector3()
	const q = new Quaternion()
	const c: any = new PerspectiveCamera()
	const state = useThree()

	useEffect(() => {
		document.body.style.cursor = hovered ? 'pointer' : 'auto'
	}, [hovered])

	useEffect(() => {
		state.camera.lookAt(0, 0, 35)
	}, [])

	useEffect(() => {
		if (clicked !== null) {
			clicked.updateWorldMatrix(true, true)

			const selection = clicked

			const { position } = selection

			const viewPos = new Vector3(selection.userData.viewPos)

			const camPosTarget: any = new Vector3(...position).add(viewPos)

			c.position.set(...camPosTarget)

			c.lookAt(...position)
			q.copy(c.quaternion)
			p.copy(c.position)
		} else {
			p.set(0, 0, 35)

			q.identity()
		}
	})

	useFrame((state, dt) => {
		const finalPosition = cameraPosition

		if (clicked !== null) {
			state.camera.position.lerp(finalPosition, MathUtils.damp(0, 1, 5, dt))
		}
	})

	const handleNavigationText = (i: number) => {
		const wholeWord = i === 0 ? 'White paper' : 'Road map'
		const shortWord = i === 0 ? 'W' : 'R'
		setNavigationText({ ...navigationText, [i]: navigationText[i].length === 1 ? wholeWord : shortWord })
	}

	return (
		<>
			<Text3D
				position={[
					props.width / (itemTitleLength ? 1.57 : currentMenuItem ? 2.95 : 2.45),
					currentMenuItem ? 2.5 : 1.2,
					-15.63
				]}
				rotation={props.rotation}
				curveSegments={32}
				bevelEnabled
				bevelSize={0.04}
				bevelThickness={0.1}
				height={0.5}
				lineHeight={0.7}
				size={1}
				font='/Vampiro One_Regular.json'>
				{navigationText[props.textIndex]}
				<meshStandardMaterial color={props.textColor} />
			</Text3D>
			{
				// @ts-ignore
				<mesh
					ref={planeRef}
					position={[
						props.width / (itemTitleLength ? (currentMenuItem ? 1.51 : 1.54) : currentMenuItem ? 2 : 1.87),
						currentMenuItem ? 3 : 1.7,
						-15.63
					]}
					onPointerOver={() => setHovered(true)}
					onPointerOut={() => setHovered(false)}
					onPointerEnter={() => handleNavigationText(props.textIndex)}
					onPointerLeave={() => handleNavigationText(props.textIndex)}
					onClick={(e: any) => {
						e.stopPropagation()
						if (clicked === e.object) {
							setClicked(null)
						} else {
							setClicked(e.object)
						}
					}}>
					{
						// @ts-ignore
						<planeGeometry args={[itemTitleLength ? (currentMenuItem ? 1.7 : 1.5) : currentMenuItem ? 10 : 8, 1.3]} />
					}
					{
						// @ts-ignore
						<meshPhysicalMaterial color={'#5441C1'} transparent={true} opacity={0} />
					}
				</mesh>
			}
		</>
	)
}

export default Navigation3DText
