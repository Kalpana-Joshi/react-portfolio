import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/kalpana-joshi-5a5433178/" target="_blank"><AiFillLinkedin/></a>
        <a href="https://github.com/Kalpana-Joshi" target="_blank"><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials