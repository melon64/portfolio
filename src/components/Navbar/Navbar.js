import { useState, useContext } from 'react'
import { RiMoonLine, RiSunLine, RiMenuFill, RiCloseLine } from 'react-icons/ri'
import { ThemeContext } from '../../contexts/ThemeContext.js'
import { brand } from '../../data.js'
import './Navbar.css'

const Nav = () => {
	const { theme, switchTheme } = useContext(ThemeContext)
	const [menu, setMenu] = useState(false)

	menu
		? document.body.classList.add('disable-scroll')
		: document.body.classList.remove('disable-scroll')

	const handleMenu = (e) => {
		if (!menu) return
		if (e.target.className !== 'Nav-menu-wrapper') setMenu(false)
	}

	return (
		<nav className='Nav'>
			<div className='Nav-brand'>
				<a className='Nav-brand-link' href='#home'>
					{brand}
				</a>
			</div>
			<div className='Nav-menu' data-show={menu} onClick={(e) => handleMenu(e)}>
				<div className='Nav-menu-wrapper'>
					<a className='Nav-link' href='#project' onClick={() => setMenu(false)}>
						Projects
					</a>
					<a className='Nav-link' href='#experience' onClick={() => setMenu(false)}>
						Experience
					</a>
					<a className='Nav-link' href='./pdf/resume.pdf' target="_blank">
						Résumé
					</a>
					<a
						className='Nav-link'
						href='#contact'
						onClick={() => setMenu(false)}
					>
						Contact
					</a>
				</div>
			</div>
			<div className='Nav-buttons'>
				<button className='Nav-switch' onClick={() => switchTheme()}>
					{theme === 'light' ? <RiMoonLine /> : <RiSunLine />}
				</button>
				<button
					className='Nav-toggle'
					onClick={() => setMenu((prevMenu) => !prevMenu)}
				>
					{menu ? <RiCloseLine /> : <RiMenuFill />}
				</button>
			</div>
		</nav>
	)
}

export default Nav
