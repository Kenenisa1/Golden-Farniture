import Logo from '../assets/logo.png'
import Hero from './Hero'
import Features from './Features'
import easyShopping from '../assets/easyShopping.jpg'

const About = () => {

  return (
    <div>
        <Hero PageName="About" img={Logo}/>

        <div className='items-center justify-center gap-3 flex flex-col lg:flex-row xl:flex-row'>

          <div className='text-left '>
            <h1 className='text-5xl text-center '>Easy Shopping!</h1>
          </div>

          <div>
            <img src={easyShopping} alt="" />
          </div>

        </div>
        <Features/>
    </div>
  )
}

export default About