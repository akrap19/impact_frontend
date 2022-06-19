import type { NextPage } from 'next'
import { Dropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import Typewriter from 'typewriter-effect'
import { useState } from 'react'

const Home: NextPage = () => {
	const [declinedCaller, setDeclinedCaller] = useState<string>('jp')

	return (
		<div className='home-container'>
			<label className='title-label'>{'IMPACT'}</label>
			<Dropdown>
				<Dropdown.Toggle variant='success' id='dropdown-basic'>
					Login
				</Dropdown.Toggle>

				<Dropdown.Menu>
					<Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
					<Dropdown.Item href='#/action-2'>Another action</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
			<div className='typewriter-container'>
				<Typewriter
					options={{
						strings:
							declinedCaller === 'jp'
								? ['火から生まれた', 'ガスに恵まれた', '破壊と悩みの中で育ちます']
								: ['BORN FROM FIRE', 'BLESSED WITH GAS', 'GROW UP IN DESTRUCTION AND DISTRESS'],
						autoStart: true,
						loop: true,
						deleteSpeed: 50
					}}
				/>
			</div>
			<label
				onClick={() => setDeclinedCaller('jp')}
				style={{ color: declinedCaller === 'jp' ? 'green' : '', borderColor: declinedCaller === 'jp' ? 'green' : '' }}
				className='language-label'>
				{'JP'}
			</label>
			<br />
			<label
				style={{ color: declinedCaller === 'us' ? 'green' : '', borderColor: declinedCaller === 'us' ? 'green' : '' }}
				onClick={() => setDeclinedCaller('us')}
				className='language-label'>
				{'US'}
			</label>
			<div className='video-div'>
				<video
					src={
						declinedCaller === 'jp'
							? 'https://edef3.pcloud.com/cfZrHCEQHZXSUlAQZCVazZZndSTr7ZQ5ZZeHkZZzWQqkZlkZcXZeXZjkZx7Zu7ZF7Z9ZSVZEkZjZ1kZE7ZdkZmO63Mv5nwqj2iTe2pD7if0KEygOV/1990s%20JDM%20Japan%20Illegal%20night%20Touge%20Drifting%2090s.mp4'
							: 'https://edef1.pcloud.com/cfZRkj8YHZB2E2NQZCVazZZcijTr7ZQ5ZZeHkZZfTlxkZYZtkZbVZekZ1ZQVZIkZ4XZI7ZxXZb7ZHVZ8kZUZVAInhVok1Qf8Wi0jd3UDCbVm9kAk/Philly%20Street%20Racing%2090%27s%201.mp4'
					}
					autoPlay
					loop
					muted
				/>
			</div>
		</div>
	)
}

export default Home
