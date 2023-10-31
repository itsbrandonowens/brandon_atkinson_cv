import '../styles/Experience.css'
import fdm_logo from "./images/fdm_logo.gif"
import one_stop_logo from "./images/one_stop_logo.png"
import hm_logo from "./images/hm_logo.png"
import React, { useState } from 'react';
const Experience = () => {
    const [isFDMOpen, setIsFDMOpen] = useState(false);

    const toggleFDM = () => {
        setIsFDMOpen((isFDMOpen) => !isFDMOpen)
    };

    
    return (
        <div className="experiences">
            <h2 className="experiencesTitle"> Experiences </h2>
            <div class="grid-container">

                <div class="grid-item">
                    <div class="mini-grid-item">
                        <img src={fdm_logo} className="northumbria_logo" alt="Tech Industry Logo"></img>
                    </div>
                    <div class="mini-grid-item">
                        <h2 className='experienceName'> Java Development Consultant</h2>
                        <p className='experienceName'> September 2022 - Current</p>
                    </div>
                    <div class="mini-grid-item">
                        <button className='dropdown_button' onClick={toggleFDM}>V</button>
                    </div>
                </div>
                {isFDMOpen == true ?
                    <div className="experience_content">
                        <p className='finished_date'> January 2023 </p>
                        <p className='experience_text'>  I completed 14 weeks of software development training while at FDM Group. This consisted of:  </p>
                        <ul className="experience_list">
                            <li className="experience_list_data"> 9 Weeks of Java </li>
                            <li className="experience_list_data" > 1 Week of UNIX </li>
                            <li className="experience_list_data"> 1 Week of SQL </li>
                            <li className="experience_list_data"> 2 Weeks of JavaScript </li>
                            <li className="experience_list_data"> 1 Week of ReactJS </li>
                        </ul>
                        <p className='experience_text'>  After becoming a consultant, I started working as a Lead Developer on an internal project to create a Consultant Career Framework. Details and screenshots of the
                            framework can be found on my portfolio. </p>


                    </div>
                    : null}

                <div class="grid-item">
                    <div class="mini-grid-item">
                        <img src={one_stop_logo} className="northumbria_logo" alt="Tech Industry Logo"></img>
                    </div>
                    <div class="mini-grid-item">
                        <h2 className='experienceName'> Customer Service Assistant</h2>
                        <p className='experienceName'> July 2021 - September 2022</p>
                    </div>
                    
                </div>

                <div class="grid-item">
                    <div class="mini-grid-item">
                        <img src={hm_logo} className="northumbria_logo" alt="Tech Industry Logo"></img>
                    </div>
                    <div class="mini-grid-item">
                        <h2 className='experienceName'> Customer Sales Assistant</h2>
                        <p className='experienceName'> September 2017 - July 2021 </p>
                    </div>
                    
                </div>

            </div>
        </div>

    )


}
export default Experience