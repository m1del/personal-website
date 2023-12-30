import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import Room from './canvas/Room';
const Hero = () => {
  return (
    <section className='bg-hero-pattern relative w-full h-screen mx-auto'>
      <div className={`absolute inset-0 top-[120px]  max-w-7xl 
      mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>

        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            hi, i'm <span className='text-[#915eff]'>
              John</span>
          </h1>

          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I like <br className='sm:block hidden'/> balls.
          </p>
        </div>
      </div>

      <Room/>


      <ComputersCanvas/>
    </section>
  )
}

export default Hero