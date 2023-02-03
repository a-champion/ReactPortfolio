import React, { useRef } from 'react';
import './contact.css';
import { SiLinkedin } from 'react-icons/si';
import  { MdEmail } from 'react-icons/md';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_q9dnq57', 'template_mtlh3iq', form.current, 'dSnjBOdjBmAi0jjSv')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>a.champion1506@gmail.com</h5>
            <a href="mailto:a.champion1506@gmail.com" target="_blank"> Send an Email</a>
          </article>
          <article className='contact_option'>
            <SiLinkedin className='contact_option-icon'/>
            <h4>LinkedIn</h4>
            <h5>a-champion</h5>
            <a href="https://www.linkedin.com/in/a-champion" target="_blank">Connect on LinkedIn</a>
          </article>
        </div>
        {/* END CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact