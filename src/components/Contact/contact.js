import React,{ useRef } from 'react'
import './contact.css'
import Instagram from '../../assets/instagram.png'
import LinkedIn from '../../assets/linkedin.png'
import Github from '../../assets/github.png'
import emailjs from '@emailjs/browser';
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ofl7xfg', 'template_5rbyr4v', form.current, {
        publicKey: 'jcjcRFE7mIbn8lsic',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert('Email sent!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section id='contactPage'>
        <div className='contact'>
            <h1 className='contactPageTitle'>
                Contact Me
            </h1>
            <span className='contactDesc'>Please fill out the form below to send a mail</span>
            <form ref={form} onSubmit={sendEmail} className='contactForm'>
                <input type='text' className='name' name='name' placeholder='Your name'/>
                <input className='email' name='email' type='email' placeholder='email'/>
                <textarea name='message' rows="5" placeholder='Your message' className='msg'/>
                <button type="submit" value="Send" className='submitBtn'>Submit</button>
                <div className='links'>
                    <a
                    href="https://www.instagram.com/poorva._.2005/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img src={Instagram} alt="Instagram" className='link'/></a>
                    <a
                    href="https://www.linkedin.com/in/poorva-nandanwar"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img src={LinkedIn} alt="linkedin" className='link'/></a>
                    <a
                    href="https://github.com/poorvanandanwar"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img src={Github} alt="github" className='link'/></a>
                </div>
                
            </form>
        </div>
    </section>
  )
}

export default Contact
