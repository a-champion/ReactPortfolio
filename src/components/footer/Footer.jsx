import React from 'react';
import './footer.css';
import { SiLinkedin } from 'react-icons/si';
import { GiBurningMeteor } from 'react-icons/gi';

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'><GiBurningMeteor /></a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Experience</a></li>
        <li><a href='#'>Projects</a></li>
        <li><a href='#'>Contact</a></li>
      </ul>

      <div className='footer_socials'>
      </div>

      <div className="footer_copyright">
        <small> </small>
      </div>
    </footer>
  )
}

export default Footer