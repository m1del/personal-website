import React from 'react';
import { Link } from 'react-scroll';
import navLogo from '../assets/personal-logo-full.png';
import "./Navbar.scss";

function Navbar() {
  return (
    <div className='navbar'>
      <div className="navLeft">
        <a href="/">
          <img className='navLogo' src={navLogo} alt='navLogo' />
        </a>
      </div>

      <div className="navCenter">
        <ul id='nav' className="navList">
            <li className='navListItem'>
              <Link spy={true} smooth={true} offset={-60} duration={500} className='navLink' to='home'>
                .home()
              </Link>
            </li>
            <li className='navListItem'>
              <Link spy={true} smooth={true} offset={-60} duration={500} className='navLink' to='about'>
                .about()
              </Link>
            </li>
            <li className='navListItem'>
              <Link spy={true} smooth={true} offset={-60} duration={500} className='navLink' to='skills'>
                .skills()
              </Link>
            </li>
            <li className='navListItem'>
              <Link spy={true} smooth={true} offset={-60} duration={500} className='navLink' to='contact'>
                .contact()
              </Link>
            </li>
        </ul>
      </div>

      <div className='navRight'></div>
      
    </div>
  )
}

export default Navbar
