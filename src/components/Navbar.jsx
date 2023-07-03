import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'

const Navbar = () => {
    const [expanded, setExpanded] = useState(false);

    const toggleNavbar = () => {
        setExpanded(!expanded);
    };

    const closeNavbar = () => {
        setExpanded(false);
    };

    return (
        <nav className="navbar">
            <div className="menu-icon" onClick={toggleNavbar}>
                <AiOutlineMenu />
            </div>
            
                <ul className={ (expanded == true) ? 'navbar-links' :'navbar-links-expanded'} >
                    <li onClick={toggleNavbar}><Link to='/'> Home </Link> </li>
                    <li onClick={toggleNavbar} ><Link to='/Personal_Profile'> Personal Profile </Link> </li>
                    <li onClick={toggleNavbar}><Link to='/Portfolio'> Portfolio </Link> </li>
                    <li onClick={toggleNavbar}><Link to='/Education'> Education </Link></li>
                    <li onClick={toggleNavbar}><Link to='/Experience'> Experience </Link></li>
                    <li onClick={toggleNavbar}><Link to='/Skills'> Skills </Link></li>
                    <li onClick={toggleNavbar}><Link to='/Hobbies_And_Interests'> Hobbies and Interests </Link></li>
                </ul>
            
        </nav>
    );
};

export default Navbar;
