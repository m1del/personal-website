import React from 'react'
import { FaCss3Alt, FaHtml5, FaJava, FaPython, FaReact } from 'react-icons/fa'
import { HiComputerDesktop } from 'react-icons/hi2'
import { IoMdInfinite } from 'react-icons/io'
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
          <HiComputerDesktop size={60} />
          <h2 className='skill-area'>
            Software Development
          </h2>
        </div>
        <p className='skill-desc'>
          Experienced in OOP: high proficiency in <strong>C++, Python, and Java. </strong>
          Comfortable with vanilla <strong>Javascript</strong> and <strong>HTML/CSS. </strong>
          and learning new frameworks. Knowledge of different systems such as Debian/Redhat based <strong>Linux</strong> distros,
          either desktop, e.g. Ubuntu, or servers, e.g. Alpine. Furthermore, experience in developing using
          a <strong>SLURM</strong> based <strong>HPC</strong> cluster.
        </p>
        <div className='skill-section'>
          <IoMdInfinite size={60} />
          <h2 className='skill-area'>
            DevOps/MLOps
          </h2>
        </div>
        <p className='skill-desc'>
          Experience as <strong>scrum master</strong> and DevOps/MLOps for many teams simultaneously.
          Utilized containerization technology like <strong>Docker/Apptainer</strong> and
          automating <strong>Ci/CD</strong> tasks, e.g. creating pipelines
          for auto-testing and auto-documentation generation using <strong>Doxygen/Sphinx</strong>.
          In MLOps, knowledge of SaaS like <strong>ClearML</strong>, and developing
          around the ClearML server daemon and agent executor.
        </p>
        <div className='skill-section'>
          <SiTensorflow size={60} />
          <h2 className='skill-area'>
            Machine Learning and Data Science
          </h2>
        </div>
        <p className='skill-desc'>
          Experienced in using neural networks, specifically CNN for deep learning. Knowledge is mainly centered around using the
          <strong>Pytorch</strong> framework, with experience in <strong>TensorFlow</strong> and <strong>Keras</strong> for anomaly detection.
          Currently utilizing <strong>HuggingFace</strong> platform to utilize and develop around
          their <strong>vision transformers</strong> library.
        </p>
        <div className='skill-section'>
          <FaReact size={60} />
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