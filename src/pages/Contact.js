import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import './Contact.scss';

function Contact() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('portfolio-emails', 'template_7tflbd5', form.current, 'CJQsta42gxvpu8mKb')
      .then((result) => {
          console.log(result.text);
          alert('Messge Sent Successfully!')
          window.location.reload(false)
      }, (error) => {
          console.log(error.text);
          alert("Failed to send message, please try again")
      });
  }
  return (
    <div className='contact-page'>
      <div className='text-content'>
        <h1 className='title'>
          .contact(me)
        </h1>
        <p className='contact-desc'>
          contact me at miclatjohndev@gmail.com or just send me an email below!
        </p>
        <div className='contact-form'>
          <form ref={form} onSubmit={sendEmail}>
            <ul>
              <li className='half'>
                <input 
                type='text'
                name='name' 
                placeholder='Name'
                required/>
              </li>
              <li className='half'>
                <input 
                type='email' 
                name='email' 
                placeholder='Email'  
                required/>
              </li>
              <li>
              <input 
              type='text'
              placeholder='Subject' 
              name='subject' 
              required/>
              </li>
              <li>
                <textarea
                placeholder='Message'
                name='message'
                required/>
              </li>
              <li>
                <input
                type='submit'
                className='flat-button'
                value='SEND'/>
              </li>
            </ul>
          </form>
        </div>

        <div className='links-container'>
          <a href='https://www.linkedin.com/in/johnmidelmicat/' target="_blank" rel="noopener noreferrer">
            <FaLinkedin className='external-link' size={50}/>
          </a>
          <a href='https://github.com/m1del' target="_blank" rel="noopener noreferrer">
            <FaGithub className='external-link' size={50}/>
          </a>
          <a href='https://www.instagram.com/midehl//' target="_blank" rel="noopener noreferrer">
            <FaInstagram className='external-link' size={50}/>
          </a>
      </div>
      </div>
    </div>
  )
}

export default Contact

