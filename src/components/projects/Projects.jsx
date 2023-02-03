import React from 'react';
import './projects.css';
import IMG1 from '../../assets/Project-2-WithMe.png';
import IMG2 from '../../assets/fold.png';
import IMG3 from '../../assets/RMB.png';

const projectData = [
  {
    id: 1,
    image: IMG1,
    title: 'WithMe',
    githubBack: 'https://github.com/a-champion/WithMe',
    githubFront: '',
    demo: 'https://blooming-river-79517.herokuapp.com/',
    text: 'WithMe is an express application that serves for adding collectable items to a database. Using EJS for server side rendering and bcrypt in tandem with express-sessions for user authorization and authentication, a user can login and then have access to full CRUD capabilities.'
  },
  {
    id: 2,
    image: IMG3,
    title: 'Rate My Brat',
    githubBack: 'https://github.com/a-champion/SausageBackEnd',
    githubFront: 'https://github.com/mekosteinberg/sausage-front-end',
    demo: 'https://rate-my-brat.herokuapp.com/',
    text: 'The idea was for a fun and silly Octoberfest app, as a SPA. Built using Express, React, Material UI. Users can upload different types of brats or rate existing brats.'
  },
  {
    id: 2,
    image: IMG2,
    title: 'The Fold',
    githubBack: 'https://github.com/a-champion/TheFold',
    githubFront: 'https://github.com/a-champion/TheFold_Front',
    demo: 'https://magenta-fenglisu-d327cd.netlify.app/',
    text: 'A video sharing blog. Built using Java/Spring framework on backend and React for frontend.'
  },
]

const Projects = () => {
  return (
    <section id='projects'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className='container projects_container'>
        {
          projectData.map(({id, image, title, githubBack, githubFront, demo, text}) => {
            return (
              <article key={id} className='project_items'>
                <h3>{title}</h3>
                  <div className='project_item-image'>
                    <img src={image} alt={title} />
                  </div>
                  <p>{text}</p>
                  <div className="portfolio_item-cta">
                    <a href={githubBack} className='btn' target='_blank'>Backend</a>
                    <a href={githubFront} className='btn' target='_blank'>Frontend</a>
                    <a href={demo} className='btn btn-primary' target='_blank'>Demo</a>
                  </div>
                </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Projects;