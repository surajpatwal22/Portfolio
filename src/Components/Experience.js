import React from 'react'
import html from "../Assets/html.png";
import css from "../Assets/css.png";
import js from "../Assets/js.png";
import react from "../Assets/react.png";
import tailwind from "../Assets/tailwind.png";
import github from "../Assets/github.png";


const Experience = () => {
    const techs =[
        {
            id:1,
            scr: html,
            title: 'HTML',
            style: ' shadow-orange-500'
        },
        {
            id:2,
            scr: css,
            title: 'CSS',
            style: ' shadow-blue-500'
        },
        {
            id:3,
            scr: js,
            title: 'JavaScript',
            style: ' shadow-yellow-500'
        },
        {
            id:4,
            scr: react,
            title: 'REACT',
            style: ' shadow-blue-600'
        },
        {
            id:5,
            scr: tailwind,
            title: 'TAILWIND',
            style: ' shadow-sky-400'
        },
        {
            id:6,
            scr: github,
            title: 'GITHUB',
            style: ' shadow-gray-400'
        },
    ]
    return (
        <div name="experience" className=' bg-gradient-to-b from-gray-800 to-black w-full h-screen '>
            <div className=' max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                <div className=''>
                    <p className=' text-4xl font-bold border-b-4 border-gray-500 p-2 inline   '>Experience</p>
                    <p className=' py-6 '>These are the technology I've worked with </p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

                    {
                        techs.map(({id,scr,title,style }) => (
                            <div 
                            key={id}
                            className={`shadow-md hover:scale-105 duration-300 py-2 rounded-lg ${style}`}>
                            <img src={scr} alt="" srcset="" className='w-20 mx-auto' />
                            <p className='mt-4'>{title}</p>
                        </div>

                        ))}
                   
                </div>
            </div>
            </div>
    )
}

export default Experience