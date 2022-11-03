import Headshot from '../assets/headshot.jpg';
import jiating from '../assets/jiating.png';
import pomobreak from '../assets/pomobreak.png';
import tiroads from '../assets/ti-roads.png';
import Card from '../components/Card';
import './About.scss';


function About() {

  const cardArray = [
      <div className='cards-array'>
          <Card 
          title='Jiating Lion & Dragon'
          stack='MongoDB | Express.js | React.js | Node.js'
          img={jiating}
          desc='Developing a website for Jiating Lion & Dragon Traditional Dance Troupe. Alongside teaching and
          performing dance, I hope to increase outeach by making a website. I am currently working on developing
          the backend server to host a multitude of images from our photoshoots.'
          link={'https://github.com/m1del/Jiating'} />
           <Card 
          title='TI-Roads '
          stack='C++ | Graphs'
          img={tiroads}
          desc='Graphs are one of the most important data structures in addressing real-world problem that involve
          networks. In this case, we developed a roadmap of Texas using a graph and public road data. Further improvements
          would involve developing a GUI to better interface with a user.'
          link={'https://github.com/ThePowerpuffGirls-tm/TI-Roads'}
          />
          <Card 
          title='Pomobreak'
          stack='React.js'
          img={pomobreak}
          desc='With the shift to online schools during COVID, focusing on academics have become even more
          difficut. Our team developed an app, aimed at the youth, which will help the keep on task using the
          Pomodoro method. We also increase engagement by including relaxing tasks the user can do durng breaks.'
          link={'https://github.com/victoriadealba/Pomobreak'}
          />
    </div>
  ];

  return (
    <div className='about-page'>

        {/* INTRO PARAGRAPH */}
        <div className='intro-par'>
        <h5 className='title'>.about(me)</h5>
        <h1 className='title-msg'>let me introduce myself</h1>
        <div className='about-info'>
            <img className='headshot' src={Headshot} alt='headshot' />
            <div className='about-me-container'>
            <p className='about-me'>
            Third-year computer science student, future software engineer. 
            My interests in information technology and software development 
            have brought me to the wonderful University of Florida, where I 
            am working on my B.S. in Computer Science with a minor in Music Theory.
            </p>
            <p className='about-me'>
              I immigrated from the Philippines when I was a child and have been living
              in Florida since. I've always loved playing with computers and instruments, 
              which have fostered my interest into a full-blown lifestyle. I love
              bringing my ideas to fruition, whether it is software or a melody.
            </p>

            <p className='about-me'>
              I am currently looking for software engineering internships as I pursue
              my studies. My interests are in web developement, machine learning, and
              cloud technologies. However, in my inexperience, I often find myself exploring
              other topics. I am always eager to learn about new technologies!
            </p>
            </div>
        </div>
        </div>
        
        <h5 className='project-header'>.about(projects)</h5>
        <h1 className='project-msg'>what i've worked on</h1>
        {/* PROJECT CARDS */}
        <div className='project-container'>

          {cardArray}
          
        </div>
        

    </div>
  )
}

export default About