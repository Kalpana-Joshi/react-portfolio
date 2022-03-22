import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'

const data1 = [
  {
      id: 1,
      image: IMG1,
      title: 'Krisi Doctor',
      github: 'https://github.com/Kalpana-Joshi',
      demo: 'https://github.com/Kalpana-Joshi'
  },
  {
      id: 2,
      image: IMG1,
      title: 'Parking Guru',
      github: 'https://github.com/Kalpana-Joshi',
      demo: 'https://github.com/Kalpana-Joshi'
  },
  {
      id: 3,
      image: IMG1,
      title: 'Pregnancy Helper',
      github: 'https://github.com/Kalpana-Joshi',
      demo: 'https://github.com/Kalpana-Joshi'
  },
  {
      id: 4,
      image: IMG1,
      title: 'Restro24',
      github: 'https://github.com/Kalpana-Joshi',
      demo: 'https://github.com/Kalpana-Joshi'
  },
  {
      id: 5,
      image: IMG1,
      title: 'Learning Management System',
      github: 'https://github.com/Kalpana-Joshi',
      demo: 'https://github.com/Kalpana-Joshi'
  }
]
const Portfolio = () => {
  return (
    <section id ='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio_container'>
      {data1.map((sub, id) => (
        <article key={id} className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src= {sub.image} alt={sub.title}></img>
          </div>
          <h3>{sub.title}</h3>
         <div className="portfolio_item-cta">
            <a href={sub.github} className='btn' target='_blank'>Github</a>
            <a href={sub.demo} className='btn btn-primary' target='_blank'>Live Demo</a>
         </div>
        </article>
      ))}
       
      </div>
    </section>
  )
}

export default Portfolio