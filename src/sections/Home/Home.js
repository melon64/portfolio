import React, { useState } from 'react';
import './Home.css'
import SocialLinks from '../../components/SocialLinks/SocialLinks.js'
import { profile } from '../../data.js'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPowerOff } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  const { name, role, description } = profile;
  const [isOn, setIsOn] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    setIsOn(!isOn);
    alert(isOn ? 'Turned off!' : 'Starting up...');
    setTimeout(() => {
      navigate('/pc');
    }, 1000);
  };

  return (
    <section className='Home section' id='home'>
      <div className='container'>
        <div className='Home-caption'>
          <span className='Home-hi'>Hi I'm</span>
          <h1 className='Home-h1'>{name}</h1>
          <h2 className='Home-h2'>{role}</h2>
          <p className='Home-description'>
            {description}
          </p>
          <button className={`power-button ${isOn ? 'on' : ''}`} onClick={handleButtonClick}>
            <FontAwesomeIcon icon={faPowerOff} />
          </button>
          <p className='Home-pc'>(psst, press me to view my interactive portfolio)</p>
          <SocialLinks />
        </div>
      </div>
    </section>
  );
};

export default Home;
