import Headshot from '../assets/headshot_ippd.png';
import jiating from '../assets/jiating.png';
import pomobreak from '../assets/pomobreak.png';
import studyhub from '../assets/sh-big.png';
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
          desc='Graphs are one of the most important data structures in addressing real-world problems that involve
          networks. In this case, we developed a roadmap of Texas using a graph structure and public road data. Further improvements
          would involve developing a GUI to better interface with a user.'
          link={'https://github.com/ThePowerpuffGirls-tm/TI-Roads'}
          />
          <Card 
          title='Pomobreak'
          stack='React.js'
          img={pomobreak}
          desc='With the shift to online schools during COVID, staying focused has become even harder. 
          Our team developed a productivity app, aimed at students, which will help them keep on task using the
          Pomodoro method. We also increase engagement by including relaxing tasks the user can do durng breaks. Further developed 
          ideas involve importing mini-games to render during break times.'
          link={'https://github.com/victoriadealba/Pomobreak'}
          />
          <Card 
          title='StudyHub'
          stack='UI/UX Design with Balsamiq'
          img={studyhub}
          desc='For newcomers to the University of Florida campus, a common issue is the unfamiliarity of the area.  
          Our team, through thorough user research and product testing, developed a prototype of this app.
          The full process and demo is documented on our website below.'
          link={'https://sites.google.com/view/studyhub-project/home'}
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
              <strong>
                🚀 Aspiring Software Engineer | B.S. Computer Science Student | MLOps & Full-Stack Enthusiast 🚀
                </strong>
            </p>
            <p className='about-me'>
              Hi, I'm John Miclat, a Computer Science student at the University of Florida, weaving through the dynamic realm of software engineering with a blend of precise technical skills and inventive problem-solving. Specializing in DevOps/MLOps, my journey in technology orbits around developing, deploying, and optimizing software solutions that elevate user experiences and operational efficiencies.
            </p>
            <p className='about-me'>
              🔍 <strong>Specializations:</strong> Full-Stack Development | DevOps & MLOps Engineering | Scrum Mastering | Automated Task Scheduling | CI/CD Pipelines Design & Optimization
            </p>
            <p className='about-me'>
              🛠 <strong>Tech Stack:</strong> Java | C++ | Python | JavaScript | HTML/CSS | React/Node | Flask | SFML | Pytorch | GitLab Ci/CD | Docker | Nginx | SLURM | Agile
            </p>
            <p className='about-me'>
              🔄 <strong>Agile Advocate:</strong> With experiences both as a Scrum Master and Project Manager, I champion Agile methodologies, ensuring products evolve through collaborative, iterative, and user-centric frameworks.
            </p>
            <p className='about-me'>
              🌱 <strong>Continual Learner:</strong> My academic exploration stretches beyond data structures, algorithm analysis, UX design, and networking, bridging to a minor in Economics, where I delve into the analytical and strategic facets of economic theories and applications.
            </p>
            <p className='about-me'>
              🤝 <strong>Interpersonal Savvy:</strong> Translating my experiences from the fast-paced restaurant industry, I bring to the tech world not only my ability to thrive under pressure but also a knack for fostering collaborative environments, ensuring seamless team dynamics, and client interactions.
            </p>
            <p className='about-me'>
              💬 <strong>Let's Connect!</strong> Whether you're passionate about tech innovations, seeking collaboration, or simply wish to chat about the exciting world of software engineering, feel free to reach out!
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