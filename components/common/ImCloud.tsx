import { Cloud } from '@react-three/drei'
import { Dispatch, useEffect, useState } from 'react'

interface ImCloudStateProps {
	position: number[]
	clicked: any
	setClicked: Dispatch<any>
}

const ImCloud = (props: ImCloudStateProps) => {
	const [hovered, setHovered] = useState(false)

	useEffect(() => {
		document.body.style.cursor = hovered ? 'pointer' : 'auto'
	}, [hovered])

	return (
		<Cloud
			opacity={0.5}
			speed={0.1} // Rotation speed
			width={5} // Width of the full cloud
			depth={0.1} // Z-dir depth
			segments={120} // Number of particles
			position={props.position}
			onClick={(e: any) => {
				e.stopPropagation()
				if (props.clicked === e.object) {
					props.setClicked(null)
				} else {
					props.setClicked(e.object)
				}
			}}
			onPointerOver={() => setHovered(true)}
			onPointerOut={() => setHovered(false)}
		/>
	)
}

export default ImCloud
