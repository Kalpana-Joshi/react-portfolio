import React from 'react'
import './about.css'
import ME from '../../assets/pp.png'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
   <section id ='about'>
     <h5>Get To Know</h5>
     <h2>About Me</h2>

     <div className='container about_container'>
       <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image"></img>
          </div>
       </div>
       <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className='about_card'>
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p>I am front-end developer, with React/React Native lives in Babarmahal, Kathmandu. I love to create simple yet beautiful applications and websites with great user experience. I'm interested in the whole frontend stack Like trying new things and building great projects. Regarding to Time Management and Project Management Skills, I am good at that too. I believe everything is an Art when you put your consciousness in it. You can connect with me via social links.</p>
      
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
       </div>
     </div>
   </section>
  )
}

export default About