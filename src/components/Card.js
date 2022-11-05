import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { HiOutlineExternalLink } from 'react-icons/hi';
import './Card.scss';


function Card({title, stack, img, desc, link}) {
  const [isOpen, setIsOpen] = useState(false);  

  return (
    <div>
      <motion.div 
        transition={{layout:{duration: 1, type: 'spring'}}} 
        layout 
        onClick={() => setIsOpen(!isOpen)} 
        className='card'
        style={{borderRadius: '1rem', boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px'}}
        >
          {/* PROJECT IMAGE */}
          {
          !isOpen && 
          (
          <motion.img
          className='project-image' 
          key={img}
          whileHover={{scale:1.05}}
          initial={{opacity:0}}
          animate={{opacity:1}}
          src={img} 
          alt='Project Image'/>
          )
          }
          {/* Fade out Project Image */}

          {/* PROJECT TITLE and TECH STACK */}
          <motion.h1 layout='position' style={{fontSize: '32px'}}>{title}</motion.h1>
          <motion.h4 layout='position' style={{fontSize: '18px'}}>{stack}</motion.h4>

          {
            !isOpen && (
              <motion.h5 layout='position' id='mobileCardSuggest' style={{fontSize: '14px'}}>Show more</motion.h5>
            )
          }
          {/* on click project description */}
          {isOpen && (
          <motion.div 
          initial={{opacity: 0}} 
          animate={{opacity: 1}}
          transition={{duration: 1}} 
          className='expanded'>
            <p className='project-description'>{desc}</p>
            <a className='project-link' target="_blank" rel="noopener noreferrer" href={link}>
              View this project
            </a>
            <HiOutlineExternalLink size={15} className='project-link-icon' />
          </motion.div>
          )}
        </motion.div>
    </div>
  )
}

export default Card