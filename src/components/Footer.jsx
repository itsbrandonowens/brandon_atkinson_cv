import '../styles/Footer.css'
import { Link } from 'react-router-dom'
import linkedin_logo from "./images/Linkedin_Logo.png"
const Footer = () => {
    return (
        <div className='footer'>
            <Link to="https://www.linkedin.com/in/brandondoatkinson/"> <img src={linkedin_logo} className="linkedin_logo" alt="Linked In Logo"></img></Link>
        </div>


    )


}
export default Footer