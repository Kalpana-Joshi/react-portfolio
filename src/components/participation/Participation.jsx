import React from 'react'
import './participation.css'
import {BiCheck} from 'react-icons/bi'

const Participation = () => {
  return (
    <section id ='participation'>
      <h5>Where I Involve</h5>
      <h2>Participations</h2>

      <div className="container services_container">
        <article className='service'>
          <div className='service_head'>
            <h3>Idea Pitching</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Selected as one of the top 3 teams presenting the idea of Smart Parking held at Kathmandu University (IT meet V 8.0).</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className='service_head'>
            <h3>Hack Fest</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Second Runner Up at Hack Fest Kathmandu in a team of three.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>A one-day coding event held on November 30, 2019 organized by Leapfrog Technology.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Full Stack web-application that provide assistance for pregnant women.</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className='service_head'>
            <h3>Startup Competition</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Participate at start-up competition held at Kathmandu University (IT meet V 8.0).</p>
            </li>
          </ul>
        </article>
      </div>

    </section>
  )
}

export default Participation