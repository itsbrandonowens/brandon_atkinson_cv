
import './App.css';
import Homepage from './components/Homepage';
import React, { useState } from 'react';
import {Route,Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';

import Personal_Profile from './components/Personal_Profile';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Hobbies_And_Interests from './components/Hobbies_And_Interests';

function App() {

  




  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path ='/' element ={<Homepage/>}/>
        <Route path ='/brandon_atkinson_cv' element ={<Homepage/>}/> 
        <Route path ='/Personal_Profile' element ={<Personal_Profile/>}/>
        <Route path ='/Portfolio' element ={<Portfolio/>}/>
        <Route path ='/Education' element ={<Education/>}/>
        <Route path ='/Experience' element ={<Experience/>}/>
        <Route path ='/Skills' element ={<Skills/>}/>
        <Route path ='/Hobbies_And_Interests' element ={<Hobbies_And_Interests/>}/>

      </Routes>


      
     
    </div>
  );
}

export default App;
