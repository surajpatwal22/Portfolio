import React from 'react'
import mealdb from "../Assets/mealdb.png";
import calculatorapp from "../Assets/calculatorapp.png";
import movieapp from "../Assets/movieapp.png"
import pokemonapp from "../Assets/pokemonapp.png"
import todo from "../Assets/todo.png"
import rockpaperscissor from "../Assets/rockpaperscissor.png"

const Portfolio = () => {

  const portfolios = [
    {
      id: 1,
      scr: mealdb,
      href: "https://mealdbapp.netlify.app/",
      name:"MEAL-APP"
    },
    {
      id: 2,
      scr: todo,
      href: "https://to-doapp371.netlify.app/",
      name:"TODO-LIST APP"

    },
    {
      id: 3,
      scr: pokemonapp      ,
       href: "https://pokemondetailapp.netlify.app/",
       name:"POKEMON-APP"

    },
    {
      id: 4,
      scr: movieapp ,
      href: "https://watchmoviesdetailnow.netlify.app/",
      name:"SEARCH-MOVIE-APP"

    },
    {
      id: 5,
      scr: calculatorapp,
      href: "https://calculatorapp234.netlify.app/",
      name:"CALCULATOR-APP"

    },
    {
      id: 6,
      scr:  rockpaperscissor,
      href: "https://playgamewithcomputer.netlify.app/",
      name:"GAME-APP"

    }
  ]
  return (
    <div name="Portfolio"
      className=' bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b border-gray-500'>Portfolio</p>
          <p className=' py-6'>check out my work here </p>
        </div>
        <div className=' grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

          {
            portfolios.map(({ id, scr , href, name  }) => (

              <div key={id} className=' shadow-md shadow-gray-600 rounded-lg'>
            <img src={scr} alt="" srcset=""
              className='  rounded-md duration-200 hover:scale-105' />
            <div className='flex items-center justify-center flex-col'>
              <h1 className='p-2 text-2xl text-amber-500'>{name}</h1>
              <button className=' w-1/2 px-6 py-3 m-1 duration-200 hover:scale-105' > 
              <a href={href} 
              target='_blank' rel='noreferrer' > Demo</a> </button>
              {/* <button className=' w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>{name}</button> */}
            </div>
          </div>
          ))
          }

          
        </div>

      </div>
    </div>
  )
}

export default Portfolio