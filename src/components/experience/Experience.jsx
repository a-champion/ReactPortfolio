import React from 'react';
import './experience.css';
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaJava, FaPython } from 'react-icons/fa';
import { SiMaterialui, SiPostgresql, SiMongodb, SiJquery } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Some of the skills I have</h5>
      <h2>My Experience</h2>

      <div className='container experience_container'>
        <div className='experience_frontend'>
          <h3>Frontend Development</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <FaHtml5 className='experience_details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <FaCss3 className='experience_details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <FaJs className='experience_details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <FaReact className='experience_details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <SiMaterialui className='experience_details-icon'/>
              <div>
                <h4>Material UI</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <SiJquery className='experience_details-icon'/>
              <div>
                <h4>jQuery</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        
        </div>

        <div className='experience_backend'>
          <h3>Backend Development</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <FaNodeJs className='experience_details-icon'/>
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <FaJava className='experience_details-icon'/>
              <div>
                <h4>Java</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <FaPython className='experience_details-icon'/>
              <div>
              <h4>Python</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <SiMongodb className='experience_details-icon'/>
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <SiPostgresql className='experience_details-icon'/>
              <div>
                <h4>Postgresql</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <TbApi className='experience_details-icon'/>
              <div>
                <h4>RESTful API's</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        
        </div>
      </div>
    </section>
  )
}

export default Experience