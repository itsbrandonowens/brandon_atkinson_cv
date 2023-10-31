import northumbria_logo from "./images/Northumbria_University_Logo.png"
import churchill_logo from "./images/churchill_logo.png"
import tech_industry_logo from "./images/tech_industry_logo.png"
import '../styles/Education.css'
import software_dev_certificate from "./softwaredevcertificate.pdf"
import degree from "./images/degree.jpg"
import React, { useState } from 'react';
import dissPDF from './thesis.pdf'

const Education = () => {
    const [isSoftOpen, setIsSoftOpen] = useState(false);
    const [isChurchillOpen, setIsChurchillOpen] = useState(false);
    const [isUniOpen, setIsUniOpen] = useState(false);

    const toggleSoft = () => {
        setIsSoftOpen((isSoftOpen) => !isSoftOpen)
    };

    const toggleUni = () => {
        setIsUniOpen((isUniOpen) => !isUniOpen)
    };

    const toggleChurchill = () => {
        setIsChurchillOpen((isChurchillOpen) => !isChurchillOpen)
    };

    return (
        <div className='education'>

            <h2 className="educationTitle"> Education & Achievements </h2>
            <div class="grid-container">
                <div class="grid-item">
                    <div class="mini-grid-item">
                        <img src={tech_industry_logo} className="northumbria_logo" alt="Tech Industry Logo"></img>
                    </div>
                    <div class="mini-grid-item">
                        <p className='educationName'> Software Development Training Certificate</p>
                    </div>
                    <div class="mini-grid-item">
                        <button className='dropdown_button' onClick={toggleSoft}>V</button>
                    </div>

                </div>
                {isSoftOpen == true ?
                    <div className="education_content">
                        <p className='finished_date'> January 2023 </p>
                        <p className='education_text'>  I completed 14 weeks of software development training while at FDM Group. This consisted of:  </p>
                        <ul className="education_list">
                            <li className="education_list_data"> 9 Weeks of Java </li>
                            <li className="education_list_data" > 1 Week of UNIX </li>
                            <li className="education_list_data"> 1 Week of SQL </li>
                            <li className="education_list_data"> 2 Weeks of JavaScript </li>
                            <li className="education_list_data"> 1 Week of ReactJS </li>
                        </ul>
                        <p className='education_text'>  After each week a project using the coding language that was used that week was handed out to ensure that all consultants were capable of each language. A 70% pass
                            mark was required to continue to the next week. After the 14 Weeks I was awarded with the certificate linked below.  </p>

                        <a href={software_dev_certificate} target="_blank"><button className="certificate_button">Show Certificate</button> </a>
                    </div>
                    : null}

                <div class="grid-item">
                    <div class="mini-grid-item">
                        <img src={northumbria_logo} className="northumbria_logo" alt="Northumbria University Logo"></img>
                    </div>
                    <div class="mini-grid-item">
                        <p className='educationName'> Northumbria University - BSc Computer Science</p>
                    </div>
                    <div class="mini-grid-item">
                        <button className='dropdown_button' onClick={toggleUni}>V</button>
                    </div>

                </div>
                {isUniOpen == true ?
                    <div className="education_content">
                        <p className='finished_date'> July 2022 </p>
                        <ul className="education_list">
                            <li className='university_text'>  Upper Second-Class Honours - BSc Computer Science </li>
                            <li className='university_text'>  First-Class Honours - Dissertation </li>
                        </ul>
                        <a href={degree} target="_blank"><button className="certificate_button">Show Degree</button> </a>
                        <p className='education_text'>  My Dissertation was titled "Evaluating the effects of crowd support in Virtual Reality". I created a VR Basketball game in Unreal Engine 4 to test whether
                            a virtual crowd would have the same affect on a players performance similar to how a crowd in a stadium does in real life sports. The link to my dissertation can be found below, and more information
                            can be found on my portfolio. </p>
                        <a href={dissPDF} target="_blank"><button className="certificate_button">Show Dissertation</button> </a>

                    </div>
                    : null}

                <div class="grid-item">
                    <div class="mini-grid-item">
                        <img src={churchill_logo} className="northumbria_logo" alt="Churchill Community College Logo"></img>
                    </div>
                    <div class="mini-grid-item">
                        <p className='educationName'> Churchill Community College</p>
                    </div>
                    <div class="mini-grid-item">
                        <button className='dropdown_button' onClick={toggleChurchill}>V</button>
                    </div>

                </div>
                {isChurchillOpen == true ?
                    <div className="education_content">
                        <p className='finished_date'> June 2018  - Sixth Form</p>
                        <ul className="education_list">
                            <li className='university_text'>  C - A-Level Mathematics</li>
                            <li className='university_text'>  Distinction - BTEC (Lvl 3) ICT </li>
                            <li className='university_text'>  B - EPQ  </li>
                        </ul>

                        <p className='finished_date'> June 2016  - High School</p>
                        <ul className="education_list">
                            <li className='university_text'> 11 GCSE'S A*-C </li>
                            <li className='university_text'> 5 A's, 4 B's and 2 C's </li>
                        </ul>

                        <p className='finished_date'> June 2015  - High School</p>
                        <ul className="education_list">
                            <li className='university_text'> Distinction* - BTEC ECDL </li>
                            <li className='university_text'> Pass - BTEC (Lvl 2) Business Studies </li>
                        </ul>



                    </div>
                    : null}

            </div>
        </div>



    )
}

export default Education