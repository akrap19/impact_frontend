import { motion } from 'framer-motion'
import { useState } from 'react'

const Reistration = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<motion.div
			layout
			data-isOpen={isOpen}
			initial={{ borderRadius: 50 }}
			className='registration'
			onClick={() => setIsOpen(!isOpen)}>
			<motion.div layout className='registration-container'>
				<>{'Registration'}</>
			</motion.div>
		</motion.div>
	)
}

export default Reistration
