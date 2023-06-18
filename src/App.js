import React from 'react'
import './App.css';
import Navbar from './Components/Navbar';
import  Home  from "./Components/Home";
import Sociallinks from './Components/Sociallinks';
import About from "./Components/About";
import Portfolio  from "./Components/Portfolio";
import Experience from "./Components/Experience";
import Contact from './Components/Contact';


const App = () => {
 return(
  <>
    <Navbar />
    <Home />
    <About/>
    <Portfolio />
    <Experience />
    <Contact/>
    

    <Sociallinks />
    
  </>
 )
}

export default App





