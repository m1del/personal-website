import 'animate.css'
import React from 'react'
import mainLogo from '../assets/personal-logo-fullname.png'
import './Home.scss'

function Home() {
  return (
    <div className='home-page'>
      <figure className='logo-container'>
        <figcaption className='logo-caption'>
          <h1 class='animate__animated animate__fadeInDown'>
          hi, im
          </h1>
        </figcaption>
        <img
        className='main-logo' src={mainLogo} alt='main-logo' />
        <figcaption className='logo-caption'>
          <h1 class='animate__animated animate__fadeInUp'>
          welcome to my space on the internet
          </h1>
        </figcaption>
      </figure>
      
    </div>
  )
}

export default Home