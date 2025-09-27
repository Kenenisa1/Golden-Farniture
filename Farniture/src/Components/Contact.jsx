import Features from './Features'
import Hero from './Hero'
import Logo from '../assets/logo.png'
import { FaLocationArrow, FaPhoneSquare, FaTimesCircle} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
        <Hero PageName="Contact" img={Logo}/>
        <div className='justify-center mt-3 items-center gap-4'>
          <div className='text-center mt-4 py-3 justify-center mb-6 w-full'>
            <h1 className='text-3xl font-bold '>Get In Touch With Us</h1>
            <p className=' flex ml-5  p-3 text-stone-400 text-center justify-center pt-3 py-3 items-center flex-row '>
              For More Information About Our Product & Services Please Feel Free to Drop Us <br /> An Email.Our Staff Always Be Ther To Help You Out. Do Not Hesitate!
            </p>
          </div>
          <div className='flex flex-col md:flex-row lg:flex-row xl:flex-row justify-center  gap-2 lg:gap-3'>
            <div className=' flex flex-col '>
              <Link className='flex flex-row gap-2 px-3 py-3 '>
                <FaLocationArrow className='text-2xl'/>
                <div className='text-[15px] '>
                  <h1 className='text-xl font-semibold'>Address</h1>
                  <p className='flex w-70'>235 rth SE Avenue, New <br />York NY10000, United <br /> States</p>
                </div>
      
              </Link>
              <Link className='flex flex-row gap-2 px-3 py-3 '>
                <FaPhoneSquare className='text-2xl'/>
                <div  className='text-[15px] '>
                  <h1 className='text-xl font-semibold'>Phone</h1>
                <p>
                  Mobile +(251) 964 - 762
                </p>
                <span>Hotline: +(251) 456-6789</span>
                </div>
              </Link>
              <Link className='flex flex-row gap-2 px-3 py-3 '>
                <FaTimesCircle className='text-2xl'/>
                <div  className='text-[15px]'>
                  <h1 className='text-xl font-semibold'>Working Time</h1>
                  <p>Monday-Friday: 9:00- 22:00</p>
                  <p>Saturday-Sunday: 9:00 - 21:00</p>
                </div>
              </Link>
            </div>
            
            <div className='flex flex-col gap-4 p-5 ml-6 '>
              <h1 className='font-black text-[13px]'>Your name</h1>
              <input type="text" placeholder='Abc ' className='py-2 text-start w-full lg:w-100 md:w-80 xl:w-120 pr-25 p-2 rounded border-stone-400 border text-md text-stone-400' />

              <h1 className='font-bold text-[14px]'>Email address</h1>
              <input type="text" placeholder='Abc@def.com ' className='py-2 text-start w-full lg:w-100 md:w-80 xl:w-120 p-2 rounded border-stone-400 border text-stone-400 ' />

              <h1 className='font-bold text-[14px]'>Subject</h1>
              <input type="text" placeholder='This is an optional ' className='py-2 text-start w-full lg:w-100 xl:w-120 md:w-80  p-2 rounded border-stone-400 border text-stone-400 ' />

              <h1 className='font-bold text-[14px]'>Message</h1>
               <textarea name="" id="" cols='3' rows='5 ' placeholder='I would like to ask' className='p-3 py-3  border border-stone-400 rounded resize-none'>

               </textarea>

               <Link type='submit' className=' py-3 px-3 w-50 text-white  rounded text-center bg-amber-700 hover:bg-amber-800'>
                  Submit
               </Link>
              
            </div>
          </div>
        </div>
        <Features/>
    </div>
  )
}

export default Contact