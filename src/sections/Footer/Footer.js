import './Footer.css'
import { brand } from '../../data.js'

const Footer = () => {
	return (
		<footer className='Footer'>
			<div className='container'>
				<p className='Footer-brand'>
					{brand} <span>© 2025</span>
				</p>
			</div>
		</footer>
	)
}

export default Footer
