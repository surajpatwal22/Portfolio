import React from 'react'

const About = () => {
  return (
    <div name= "About" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white' >
        <div className='p-4 max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full '>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500 '>About</p>
            </div>

            <p className='text-xl mt-20'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum nam, nulla fugit, quidem nobis libero magni consectetur maxime iste laborum, reiciendis blanditiis animi labore esse corrupti! Labore doloribus reiciendis repudiandae!</p>

            <br />

            <p className='text-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, modi cumque! Dolorem sequi ducimus, tempora unde incidunt, doloremque ab, molestias cupiditate aut assumenda voluptate debitis ipsam aperiam ipsum quasi tenetur?  </p>
        </div>
    </div>
  )
}

export default About