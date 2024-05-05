import { v4 as uuidv4 } from 'uuid'
import { social } from '../../data.js'
import Icon from '../Icon/Icon.js'
import './SocialLinks.css'

const SocialLinks = () => {
	return (
		<div className='Social-links'>
			{social.map((s) => (
				<a className='Social-link' href={s.link} target='_blank' rel="noreferrer" key={uuidv4()}>
					<Icon icon={s.icon} />
				</a>
			))}
		</div>
	)
}

export default SocialLinks
