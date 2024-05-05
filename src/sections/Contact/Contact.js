import { contact } from '../../data.js'
import Button from '../../components/Button/Button.js'
import SocialLinks from '../../components/SocialLinks/SocialLinks.js'
import './Contact.css'

const Contact = () => {
	const { description, email } = contact

	return (
		<section className='Contact section' id='contact'>
			<div className='container'>
				<h2 className='Contact-h2 section-head'>Contact</h2>
				<div className='container-sm'>
					<h3 className='Contact-h3'>
						<a href={`mailto:${email}`}>Get in touch!</a>
					</h3>
					<p className='Contact-description'>{description}</p>
					<div className='Contact-button'>
						<Button text='Send email' link={email} />
					</div>
					<div className='Contact-social'>
						<SocialLinks />
					</div>
				</div>
			</div>
		</section>
	)
}

export default Contact
