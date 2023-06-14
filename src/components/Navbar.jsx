import '../styles/Navbar.css'
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div>
            <ul className="navbar navbar-expand-lg navbar-dark bg-dark">
                <li><Link to='/'> Home </Link> </li>
                <li><Link to='/Personal_Profile'> Personal Profile </Link> </li>
                <li><Link to='/Portfolio'> Portfolio </Link> </li>
                <li><Link to='/Education'> Education </Link></li>
                <li><Link to='/Experience'> Experience </Link></li>
                <li><Link to='/Skills'> Skills </Link></li>
                <li><Link to='/Hobbies_And_Interests'> Hobbies and Interests </Link></li>
            </ul>

        </div>


    )


}
export default Navbar