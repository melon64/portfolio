import { React, useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import Header from '../../sections/Header/Header.js';
import Home from '../../sections/Home/Home.js';
import Projects from '../../sections/Projects/Projects.js';
import Experience from '../../sections/Experience/Experience.js';
import Contact from '../../sections/Contact/Contact.js';
import Footer from '../../sections/Footer/Footer.js';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop.js';
import '../../theme/theme.css'
import './HeroPage.css'

function HeroPage() {
    const { theme } = useContext(ThemeContext)
    return (
        <div className='hero' id='top' data-theme={theme}>
            <Header/>
            <Home/>
            <Projects/>
            <Experience/>
            <Contact/>
            <Footer/>
            <ScrollToTop />
        </div>
    );
}

export default HeroPage;