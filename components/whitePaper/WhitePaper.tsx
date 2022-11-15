import { Html, Plane, Text3D } from '@react-three/drei'
import { Dispatch, SetStateAction, useRef } from 'react'
import { Form, Button } from 'react-bootstrap'
import Screen from './../../3dModels/Screen'
import { ArrowRightShort } from 'react-bootstrap-icons'

interface IWhitePaperStateProps {
	setHovered: Dispatch<SetStateAction<boolean>>
}

const WhitePaper = (props: IWhitePaperStateProps) => {
	const planeRef: any = useRef()

	return (
		<>
			<Text3D
				position={[30, 6.8, -15]}
				rotation={[0.4, -20.4, 0.4]}
				curveSegments={32}
				bevelEnabled
				bevelSize={0.04}
				bevelThickness={0.1}
				height={0.5}
				lineHeight={0.6}
				size={0.4}
				scale={2}
				font='/Vampiro One_Regular.json'>
				{`White paper`}
				<meshNormalMaterial />
			</Text3D>
			<Screen rotation={[0, 300, 0]} position={[160, -3, 3]} scale={1.015} />
			<mesh ref={planeRef} position={[160, -3, 3]} rotation={[0, -300, 0]}>
				<planeGeometry args={[58, 41.3]} />
				<meshPhysicalMaterial color={'black'} />
			</mesh>
			<mesh ref={planeRef} position={[155.1, -3, 2.75]} rotation={[0, 300, 0]}>
				<planeGeometry args={[52, 34.3]} />
				<meshPhysicalMaterial color={'black'} />
			</mesh>
			<Html className='content' rotation={[0, 300, 0]} position={[155, -2, 2.75]} transform occlude>
				<div
					className='white-list-content-container'
					onPointerOver={() => props.setHovered(false)}
					onPointerOut={() => props.setHovered(true)}>
					<div className='intro-and-title-container'>
						<label className='intro-label'>
							{
								'Some things mentioned in this whitepaper are still under heavy development and might be adapted. Use it only to gain a general idea of what we are building. Names of the tokens are only placeholders and will be changed.'
							}
						</label>
						<label className='title-label'>{'Our vision'}</label>
						<label className='text-label'>
							{
								'Our vision is to create a fun & highly competitive vehicular combat & racing game where players can choose to play for free simply for fun or compete for NFT prizes, big prize pools and have a chance to become pro players and build a name for themselves in Impact.'
							}
						</label>
						<div className='unordered-text-container'>
							<ArrowRightShort />
							<label className='text-label'>
								{
									'Our vision is to create a fun & highly competitive vehicular combat & racing game where players can choose to play for free simply for fun or compete for NFT prizes, big prize pools and have a chance to become pro players and build a name for themselves in Impact.'
								}
							</label>
						</div>
						<div className='unordered-text-container'>
							<ArrowRightShort />
							<label className='text-label'>
								{
									'We aim to make the game free outside of the competitive aspect, but the variety will be limited to what is offered on rotations, what you rent or own.'
								}
							</label>
						</div>
						<div className='unordered-text-container'>
							<ArrowRightShort />
							<label className='text-label'>
								{
									'We also plan to make sponsorship deals with companies that wanna permanently advertise via cosmetics on vehicles such as vinyls, billboards, logos or such displayed on arenas & places where it doesnt break immersion. This should help with financial stability of the project without harming the players.'
								}
							</label>
						</div>
						<div className='unordered-text-container'>
							<ArrowRightShort />
							<label className='text-label'>
								{
									'We will not stop working on Impact or take it easy after we launch it, we will work on expanding the game with consistent updates as long as we are able to in order to keep our players satisfied.'
								}
							</label>
						</div>
						<div className='unordered-text-container'>
							<ArrowRightShort />
							<label className='text-label'>
								{
									'Our economic model is intentionally simple so its easy to digest and understand. Your skills are the main factor in earning, not RNG or the size of your wallet. The economy is also designed to favor token hodlers as well due to it being deflationary through activity which should prevent mass dumping and encourage hodling & competing instead.'
								}
							</label>
						</div>
						<div className='unordered-text-container'>
							<ArrowRightShort />
							<label className='text-label'>
								{
									'We will also occasionally host event tournaments where anyone will be able to compete for free to give everyone an opportunity at winning prizes and hopefully attract more players to competitive mode.'
								}
							</label>
						</div>
						<div className='unordered-text-container'>
							<ArrowRightShort />
							<label className='text-label'>
								{
									'The cheapest buy-in for competitive mode & tournaments is as low as 1$, with many players that can add up to a large prize pool and grants the winners opportunity for life changing money while those who lose don’t get harmed since it’s only 1$. You can however compete at higher stakes too.'
								}
							</label>
						</div>
						<label className='subtitle-label'>{'What is Impact?'}</label>
						<label className='text-label'>
							{
								'Impact is an upcoming competitive free-to-play third person vehicular combat game made for the blockchain in Unreal Engine 5 by Ascent Games where players can play just for fun or compete and earn. The game will be rich with content and variety.'
							}
						</label>
						<label className='subtitle-label'>{'Gameplay'}</label>
						<label className='text-label'>
							{
								'Gameplay will be a third person vehicular combat shooter, there will be several different game modes. If you only wanna race you can play racing modes, if you want to shoot without the racing part you can play other modes like DM,TDM,Battle Royale, Capture the flag or Survival. Or if you wanna do both you can play our Death Races or Pursuit which are gonna be full of adrenaline since both your shooting & driving skills will be put to the test. The players will have weapons, abilities, nitro, ability to hover & power ups at their disposal to destroy & outmaneuver their enemies. If you are interested in modernized gameplay drawing inspiration from classics like Twisted Metal, Vigilante8, Trackmania or Crash Tag Team racing make sure to follow us and try it out yourself in beta testing which is estimated to take place in Fall(Q4) of 2022. There will be prizes for the best testers & contesters.'
							}
						</label>
						<label className='subtitle-label'>{'Game Modes'}</label>
						<label className='text-label'>
							{
								'We aim to make Impact rich with various different game modes. This also allows you to compete in different settings with different conditions & if you choose with different risk/reward(winning battle royale is harder than winning a deathmatch but reward ratio mirrors that)'
							}
						</label>
						<label className='note-label'>{' - Deathmatch'}</label>
						<label className='note-label'>{' - Survival'}</label>
						<label className='note-label'>{' - Team Deathmatch'}</label>
						<label className='note-label'>{' - Guild Deathmatch'}</label>
						<label className='note-label'>{' - Classic Races'}</label>
						<label className='note-label'>{' - Death Race'}</label>
						<label className='note-label'>{' - Pursuit'}</label>
						<label className='note-label'>{' - Battle Royale'}</label>
						<label className='note-label'>{' - Team Battle Royale'}</label>
						<label className='note-label'>{' - Guild Battle Royale'}</label>
						<label className='note-label'>{' - Team Capture the flag'}</label>
						<label className='note-label'>{' - Guild Capture the flag'}</label>
						<label className='note-label'>{' - Team Capture the point'}</label>
						<label className='note-label'>{' - Guild Capture the point'}</label>
						<label className='note-label'>{' - Defend/Destroy the objective'}</label>
						<label className='note-label'>{' - Player Loadout'}</label>
						<label className='note-label'>{' - Vehicle'}</label>
						<label className='note-label'>{' - Several Ranged Weapons'}</label>
						<label className='note-label'>{' - Melee/Impact Weapon'}</label>
						<label className='note-label'>{' - Several Abilities'}</label>
						<label className='note-label'>{' - Driver'}</label>
						<label className='note-label'>{' - Vehicle cosmetics'}</label>
						<br />
						<br />
						<label className='text-label'>
							{
								'Players can use some of the assets available by default on rotation, earn them by competing, rent them or buy them off market from other players.'
							}
						</label>
						<label className='subtitle-label'>{'Vehicle Attributes are as following:'}</label>
						<label className='note-label'>{' - Damage'}</label>
						<label className='note-label'>{' - Health'}</label>
						<label className='note-label'>{' - Shield'}</label>
						<label className='note-label'>{' - Nitro'}</label>
						<label className='note-label'>{' - Hover (Flying)'}</label>
						<label className='note-label'>{' - Armor Type'}</label>
						<br />
						<br />
						<label className='subtitle-label'>{'How will the economy work?'}</label>
						<br />
						<label className='text-label'>{'Impact’s token economy is built on 2 tokens:'}</label>
						<label className='text-label'>
							<b>{'Ascend is a fully tradeable deflationary token used for competing in Impact.'}</b>
							<br />
							{
								'Economy of Ascend token is designed around a combination of reducing the token supply through fees on competitive activity and increasing the demand over time which should affect the token economy positively long term.'
							}
						</label>
						<label className='text-label'>
							<b>
								{
									'Tegridy is an ingame & untradable inflationary token awarded to those who compete using Ascend tokens and is used to exchange for cosmetics & other ingame assets.'
								}
							</b>
						</label>
						<label className='text-label'>
							{
								'Offering a safe passive return(APY) ruins the whole point of competing to earn, and would just dilute the value of Ascend token until it gets out of control which is counterintuitive to rewarding those who hold the token or compete. TVL(Total Value Locked) is great for growing token value through good times, but in face of panic and bear market it only does more damage so we’d rather build & grow at a steady pace.'
							}
							<br />
							{
								'If however TVL is ever needed to be put in place for stability we will offer participation to Ascension Tournaments/Standalone Tournaments along some other mechanics instead of inflating the token supply with staking.'
							}
						</label>
						<label className='subtitle-label'>{'What do players earn by competing?'}</label>
						<label className='text-label'>
							{
								'Beside having a stab at the Ascend prize pool everyone participating also earns inflationary in-game Tegridy tokens which they can use to trade in for ingame assets like cars, weapons, abilities & cosmetics. Players competing in tournaments also earn Tournament Points which are used as entry to Ascension Tournaments.'
							}
						</label>
						<label className='text-label'>
							{
								'Each player pays a small participation fee of 1$ to participate in daily tournaments & 5$ in Ascend tokens for weekly tournaments, which goes to a prize pool, burn, Ascension Tournament pool & Team.. The prize pool is divided amongst top contenders.'
							}
						</label>
						<label className='text-label'>
							{
								'In Competitive Mode 95% of the prize pool is split between top players, 1.5% goes to Ascension Tournament, 1.5% goes to the Team & 2% is burned.'
							}
						</label>
						<label className='text-label'>
							{
								'In Tournament Mode 80% of the prize pool is split between top players, 7,5% goes to Ascension Tournament, 5% goes to the Team & 7,5% is burned. To compensate for the bigger fee, players will get rewarded with a lot more Tegridy tokens than in normal competitive mode, but will also get rewarded Tournament points giving them access to Ascension Tournaments. The fees might get lowered if we establish a large competitive playerbase because it will become more sustainable at that point.'
							}
						</label>
						<label className='subtitle-label'>{'Tegridy Token'}</label>
						<label className='text-label'>
							{
								'Inflationary untradeable in-game tokens awarded for participation in competitive games & tournaments. It’s used for trading in for Vehicles, Weapons, Abilities & Cosmetics including seasonal ones.. Tegridy token will not be tradeable on exchanges, but the NFTs you can use them for will be fully tradable and usable in the game.'
							}
						</label>
						<label className='subtitle-label'>{'Ascend Token'}</label>
						<label className='text-label'>
							{
								'Deflationary untradeable tokens used for competing in Impact and other future games released by Ascent Games. Competing using Ascend Token always awards you Tegridy token, while competing in Tournaments also gives you access to Ascension Tournament, of course if you are one of top contenders you earn a piece of the Ascend prize pool too!'
							}
						</label>
						<label className='subtitle-label'>{'Tournaments & Tournament Points'}</label>
						<label className='text-label'>
							{
								'Tournament points are ingame tokens giving players access to Ascension Tournaments. Players will be awarded 1 Tournament Point for Daily Tournament & 6 Tournament Points for Weekly Tournaments. Full details about it will be shown pre-launch in our whitepaper.'
							}
						</label>
						<label className='subtitle-label'>{'Ascension Tournament'}</label>
						<label className='text-label'>
							{
								'Special tournaments funded from part of the fees in Tournaments, Competitive mode,part of Second Market Sale fees & Ascend Token sale. Players need Tournament Points to gain access to Ascension Tournament which are earned through competing in regular Tournaments. Same rules as regular tournaments except the entry fee is based on your activity in regular Tournaments. It’s like a bonus Tournament for active competitive players.'
							}
						</label>
						<label className='subtitle-label'>{'Impact Seasons'}</label>
						<label className='text-label'>
							{'OPENING SEASON:'}
							<br />
							{
								'All ingame assets are available for free in the opening season. Players will be able to play for free or compete for profits using blockchain’s native token.'
							}
						</label>
						<label className='text-label'>
							{'SEASONS AFTERWARDS:'}
							<br />
							{
								'Once the game has a satisfying player base we will create a token sale of Ascend Tokens. Players can use assets available by default on rotation, the ones they earned through Tegridy trade-in, rented or bought off the marketplace from other players. Free to play mode will have free assets on rotation available to all, if they want specific ones they will need to buy or rent them from other players.'
							}
						</label>
						<label className='subtitle-label'>{'Token Sale'}</label>
						<label className='text-label'>
							{
								'Details such as total supply & price per token will be decided & announced at a later date some time prior to the sale, but we will give you an idea of how the funds from token sale will be distributed:'
							}
						</label>
						<label className='subtitle-label'>
							{'USD fund allocation from initial token sale if 90% or more sells-out(approx. & not final numbers):'}
						</label>
						<label className='text-label'>
							<b>{'25% = Liquidity Pool'}</b>
						</label>
						<label className='text-label'>
							<b>{'20% = Event Treasury'}</b>
							{' (Used for funding custom tournament events).'}
						</label>
						<label className='text-label'>
							<b>{'20% = Company Treasury'}</b>
							{' (Used to help fund further development)'}
						</label>
						<label className='text-label'>
							<b>{'17.5% = Marketing Treasury'}</b>
							{' (Used for marketing, including rewarding top Streamers)'}
						</label>
						<label className='text-label'>
							<b>{'17.5% = Team'}</b>
							{' (Compensation for work & expenses so far)'}
						</label>
						<label className='subtitle-label'>
							<u>{'What makes Impact different?'}</u>
						</label>
						<label className='note-label'>
							{
								' - We will launch with a game ready before any sale takes place so that you know what you are investing your money into, the game will still undergo massive developments over the years. '
							}
						</label>
						<br />
						<label className='note-label'>
							{' - We will do our best to be as fair and efficient as possible with funding.'}
						</label>
						<br />
						<label className='note-label'>
							{' - Our goal is to make one of the most satisfying modern vehicular combat games'}
						</label>
						<br />
						<label className='note-label'>
							{
								' - We will build on top of Ascend token, which will be used as a competitive token in some of future games. '
							}
						</label>
						<br />
						<label className='note-label'>
							{
								' - We aim to use cosmetics & ingame assets to reward players for activity instead of selling them for profit meaning the competitive players are the ones earning from selling skins & assets. However we may need to also use battle passes in the first season or two before we get traction to sustain the project but ultimately we want to give full power over it to the players once the competitive economy is up and running.'
							}
						</label>
						<br />
						<label className='note-label'>
							{
								' - Players will always have attractive rewards to compete for, no matter the current state of crypto. Our USD reserves for the Ascension Tournament, seasonal NFTs & growing economy of Ascend will ensure that.'
							}
						</label>
						<br />
						<label className='note-label'>
							{
								' - We want traditional gamers to give blockchain gaming a chance to either play free for fun or try competing.'
							}
						</label>
						<br />
						<label className='note-label'>
							{
								' - We want to advertise through our community, the best streamers will be rewarded! This way we give back to our players who help us bridge the gap between web2 & web3.'
							}
						</label>
						<br />
						<label className='note-label'>
							{
								' - We want to avoid VCs, wrong types of angel investors & premature sales to build all this, all costs are coming out of our personal pocket & token sale that will happen after Impact is already an established game. Even though it’s really risky for us, we find this to be one of key components to building a truly player focused project without becoming a corporate cash grab since we aren’t handing the reins to a third party focused on maximizing profits. If we do take investments to improve Impact we will do so responsibly and only from those we can put our faith in.'
							}
						</label>
						<label className='note-label'>
							{' - It’s not pay to win and it is balanced, different assets offer variety not raw power.'}
						</label>
						<label className='note-label'>
							{
								' - Impact doesn’t constantly raise the power ceiling & price entry all the time just to regulate the token inflation coming from passive staking.'
							}
						</label>
						<label className='note-label'>
							{
								' - Tokenomics aren’t convoluted or forced and serve a great purpose in the ecosystem with a lot of room for growth if the game establishes a healthy competitive player base.'
							}
						</label>
						<label className='note-label'>
							{' - Botters & cheaters won’t leech off of the system due to our precautions.'}
						</label>
						<label className='note-label'>
							{
								' - We are transparent about risks, how the funds get distributed, more sustainable and Impact doesn’t require constant influx of new players to carry the weight of unnecessary inflation or ponzi economics, maintaining a healthy player base is more than enough which is just like what games should be'
							}
						</label>
						<label className='note-label'>
							{' - Truly player focused project, but mostly focused towards competitive players'}
						</label>
						<label className='subtitle-label'>{'Closing statement'}</label>
						<label className='text-label'>
							{
								'We still have some placeholder assets to replace we might still use in our devlog videos. These assets will be replaced once our artist completes them all and they will not be in the finished game. We might still need to tweak monetization methods a bit or raise the fee a bit since its a multiplayer game and paying for multiple dedicated servers could easily get really expensive depending on the size of the playerbase (server cost fluctuates depending on multiple factors, but each server will likely cost us 50$ or more each month. 100 servers alone could easily cost 5000$+ per month) We must ensure that there will be no problems with the servers & have funds in reserves to prepare for mass adoption since in that case we would need to rent even more servers, but also to ensure sustainability through hard times. We will do this in a fully transparent manner, the goal behind monetization is not to drive profitability up for ourselves as much as possible, but to make sure the project itself is sustainable and give the players the best possible experience without hiccups or a looming death sentence to a project due to unsustainability. We will not take any VC or Angel investment that would prey on our players. We will only consider those who truly believe in our vision and want us to help us make it a reality.'
							}
						</label>
						<label className='text-label'>
							<b>
								{
									'Everything we do will be for the benefit of the project & its community, our work & actions so far along the plans for the future speak for that louder than words ever could. We respect skepticism in this space so we will not leave any room for doubt about the integrity of this project. Our goal is to truly create something special & fun for our players, with the option to actively compete for life changing money with a really low participation cost without the need of being a pro backed by an eSports brand. You control your own destiny in Impact. We might not have an extensive resume like many other big projects, but we did our due diligence and can provide even better experience to our players since our focus is not profitability, but players themselves.'
								}
							</b>
						</label>
						<label className='text-label'>
							{
								'We will go into a lot more detail, add team information & explain everything in our whitepaper in the following months prior to the launch of the open beta, we will announce these updates!'
							}
							<br />
							{
								'The game is already more than halfway done so open beta is estimated to hopefully begin in Q4 of 2022 with official launch happening sometime in 2023, so if you are interested or wanna participate in beta testing you can follow us on Discord, Twitter & Telegram.'
							}
							<br />
							{'We will also reward top beta testers!'}
						</label>
						<label className='note-label'>
							<b>{'Feel free to ask us any questions there!'}</b>
						</label>
					</div>
				</div>
			</Html>
		</>
	)
}

export default WhitePaper
