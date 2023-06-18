import React from 'react'
import heroPic from "../Assets/heroPic.jpg";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home"
      className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800' >
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
          {/* left-detail-sxn */}
          <div className='  flex flex-col justify-center h-full mt-10
          '>
            <h2 className='text-white text-4xl sm:text-7xl sm:ml-6 font-bold'> I'm a Front End Developer </h2>
            <p className='text-gray-500 mt-3 sm:ml-6'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia a cum optio autem, unde voluptatem ipsam cumque accusamus velit nobis.</p>
            <div>
              <Link to='portfolio' smooth duration={500} className=' group text-white text-base w-fit px-6 py-3 my-2 rounded-md flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer font-bold sm:ml-6'>
                Portfolio 
                <span className='ml-1 group-hover:rotate-90 duration-300'> 
                  <HiArrowRight size={25} className='ml-1'/>
                </span>
              </Link>
            </div>
          </div>
          {/* rightsxn */}
          <div>
            <img src={heroPic} alt="my profile" srcset="" className='mx-auto rounded-3xl w-2/3 sm:ml-36 md:w-30%  md:ml-44'  />
          </div>
        </div>

    </div>
  )
}

export default Home