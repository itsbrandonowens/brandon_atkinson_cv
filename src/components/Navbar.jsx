import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'

import '../styles/Footer.css'
import linkedin_logo from "./images/Linkedin_Logo.png"
import github_logo from "./images/github_logo.png"

const Navbar = () => {

    const [expanded, setExpanded] = useState(false);

    const toggleNavbar = () => {
        setExpanded(!expanded);
    };



    return (
        <div>
            <nav className="navbar">
                <div className="menu-icon" onClick={toggleNavbar}>
                    <AiOutlineMenu />
                </div>

                <ul className={(expanded == false) ? 'navbar-links' : 'navbar-links-expanded'} >
                    <li onClick={toggleNavbar}><Link to='/'> Home </Link> </li>
                    <li onClick={toggleNavbar} ><Link to='/Personal_Profile'> Personal Profile </Link> </li>
                    <li onClick={toggleNavbar}><Link to='/Portfolio'> Portfolio </Link> </li>
                    <li onClick={toggleNavbar}><Link to='/Education'> Education </Link></li>
                    <li onClick={toggleNavbar}><Link to='/Experience'> Experience </Link></li>
                    <li onClick={toggleNavbar}><Link to='/Skills'> Skills </Link></li>
                    <li onClick={toggleNavbar}><Link to='/Hobbies_And_Interests'> Hobbies and Interests </Link></li>
                </ul>

            </nav>

            <div className={(expanded == false) ? 'footer' : 'footer-expanded'} >
                <Link to="https://www.linkedin.com/in/brandondoatkinson/"> <img src={linkedin_logo} className="linkedin_logo" alt="Linked In Logo"></img></Link>
                <Link to="https://github.com/itsbrandonowens"> <img src={github_logo} className="github_logo" alt="GitHub Logo"></img></Link>
            </div>
        </div>
    );
};

export default Navbar;
