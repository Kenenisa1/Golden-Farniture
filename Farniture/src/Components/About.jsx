import React from 'react'
import Logo from '../assets/logo.png'
import Hero from './Hero'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <Hero PageName="About" img={Logo}/>
        <Link to='/Blog' className='text-amber-600 font-bold text-lg hover:underline'>
          Blog
        </Link>
        
    </div>
  )
}

export default About