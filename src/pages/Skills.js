import React from 'react'
import { FaCss3Alt, FaHtml5, FaJava, FaPython, FaReact } from 'react-icons/fa'
import { HiComputerDesktop } from 'react-icons/hi2'
import { SiCplusplus, SiTensorflow } from 'react-icons/si'
import './Skills.scss'

function Skills() {
  return (
    <div className='skills-page'>
      <div className='text-container'>
        <h1 className='skills-title'>
          My Expertise
        </h1> 
        <div className='skill-section'>
        <HiComputerDesktop size={80}/>
        <h2 className='skill-area'>
          Software Development
        </h2>
        </div>
        <p className='skill-desc'>
          Experienced in OOP: high proficiency in <strong>C++, Python, and Java. </strong>
          Comfortable with vanilla <strong>Javascript</strong> and <strong>HTML/CSS. </strong>
          and learning new frameworks.
        </p>
        <div className='skill-section'>
          <FaReact size={60}/>
        <h2 className='skill-area'>
          Front End Dev
        </h2>
        </div>
        <p className='skill-desc'>
          Passionate about <strong>UI/UX. </strong>Improving proficiency in Javascript 
          by learning <strong>Typescript </strong>and using frameworks such as 
          <strong> React.js and Next.js. </strong>
          Learning new ways of styling with <strong>Tailwind.css.</strong>
        </p>
        <div className='skill-section'>
          <SiTensorflow size={60}/>
        <h2 className='skill-area'>
          Machine Learning
        </h2>
        </div>
        <p className='skill-desc'>
          Basic experience with Tensorflow. Developed a algorithm to perform sentiment
          analysis on text passages. 
        </p>
      </div>
      
      <div className='cube-outer'>
      <div className='cube-container'>
        <div className='cubespinner'>
          <div className='face1'>
            <FaReact color='#DD0030' />
          </div>
          <div className='face2'>
            <SiCplusplus color='#F06529' />
          </div>
          <div className='face3'>
            <FaPython color='#28A4d9' />
          </div>
          <div className='face4'>
            <FaJava color='#53D4F4' />
          </div>
          <div className='face5'>
            <FaHtml5 color='#3FD81D' />
          </div>
          <div className='face6'>
            <FaCss3Alt color='#3C4D28' />
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Skills