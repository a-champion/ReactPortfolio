import React from 'react';
import './about.css';
import US from '../../assets/tk.jpeg';
import { FaAward } from 'react-icons/fa';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about_container'>
        <div className='about_me'>
          <div className="about_me-image">
            <img src={US} alt='About Image' />
          </div>
        </div>
        
        <div className='about_content'>
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Who Am I</h5>
              <small>A software engineer, husband, and father with a passion for learning.</small>
            </article>

            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Now</h5>
              <small>I've graduated from General Assembly's Software Engineer Immersive Remote program and started a degree program at the University of Montana with a major in Computer Science. </small>
            </article>

            {/* <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Skills</h5>
              <small></small>
            </article> */}
            
            
            
          </div>
          <p>
            I am a new software engineer transitioning from sales and retail with many years of customer service experience. My time in the military has prepared me for cross-team collaboration in fast paced envrionments, and my love of gaming naturally turned into a love of healthy competition! I use the knowledge and experience that I have obtained to work efficiently in high-stress situations, analyze my team's strengths, and delegate tasks, in order to meet client expectations... just don't ask me where to stand. I'm not the raid leader.
            </p>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About