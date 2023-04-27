import React from 'react'
import './App.css';
import Navbar from './Components/Navbar';
import  Home  from "./Components/Home";
import Sociallinks from './Components/Sociallinks';
import About from "./Components/About";

const App = () => {
 return(
  <>
    <Navbar />
    <Home />
    <About/>

    <Sociallinks />
    
  </>
 )
}

export default App





