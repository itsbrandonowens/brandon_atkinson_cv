import React from 'react'
import '../styles/Homepage.css'
import grad_photo from "./images/gradimage1.jpg"

const Home = () => {
  return (
    // Welcome to my Online CV! 
    // I hope this code impresses you enough to consider me for your position!

    <div className="home-container">
      <span className="home-text Heading">Hello, I am Brandon Atkinson</span>
      <span className="home-text1 Heading">Welcome to my CV!</span>
      <span className="home-text2 Heading">Software Developer</span>
      <span className="home-text3 Heading">An Aspiring</span>
      <img src={grad_photo} className="grad_photo" alt="Graduation Photo"></img>
    </div>





  )
}

export default Home
