import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';
import {IoLogoTwitter} from 'react-icons/io';

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>Kalpana Joshi</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#participation'>Participation</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href='https://www.facebook.com/profile.php?id=100008166607876'><FaFacebookF/></a>
        <a href='https://www.instagram.com/kalpana8688/?hl=en'><FiInstagram/></a>
        <a href='https://twitter.com/Kalpana69210369?t=cNy8fj-6luh_AW9DHfp3YQ&s=09'><IoLogoTwitter/></a>
      </div>

      <div className="footer_copyright">
        <small>Copyright &copy; 2022 Kalpana Joshi | All Rights Reserved. </small>
      </div>
    </footer>
  )
}

export default Footer