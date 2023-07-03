import northumbria_logo from "./images/Northumbria_University_Logo.png"
import churchill_logo from "./images/churchill_logo.png"
import tech_industry_logo from "./images/tech_industry_logo.png"
import '../styles/Education.css'

const Education = () => {
    return (
        <div className='education'>

            <h2 className="educationTitle"> Education & Achievements </h2>
            <div class="grid-container">
                <div class="grid-item">

                    <h2 className='educationName'> Software Dev Training</h2>
                    <img src={tech_industry_logo} className="northumbria_logo" alt="Tech Industry Logo"></img>
                    <p className='finished_date'> January 2023 </p>
                    <li className='university_text'>  Software Development Foundation Training </li>
                </div>

                <div class="grid-item">
                    <h2 className='educationName'> University</h2>
                    <img src={northumbria_logo} className="northumbria_logo" alt="Northumbria University Logo"></img>
                    <p className='finished_date'> July 2022 </p>
                    <li className='university_text'>  2:1 - BSc (Hons) Computer Science </li>
                    <li className='university_text'>  First - Dissertation </li>
                </div>

                <div class="grid-item">
                    <h2 className='educationName'> University</h2>
                    <img src={northumbria_logo} className="northumbria_logo" alt="Northumbria University Logo"></img>
                    <p className='finished_date'> July 2019 </p>
                    <li className='university_text'> Foundation Degree - Computing and Information Technology </li>
                </div>

                <div class="grid-item">
                    <h2 className='educationName'> Sixth Form</h2>
                    <img src={churchill_logo} className="churchill_logo" alt="Churchill Community College Logo"></img>
                    <p className='finished_date'> June 2018 </p>
                    <li className='university_text'>  C - A-Level Mathematics</li>
                    <li className='university_text'>  Distinction - BTEC (Lvl 3) ICT </li>
                    <li className='university_text'>  B - EPQ  </li>
                </div>

                <div class="grid-item">
                    <h2 className='educationName'> High School</h2>
                    <img src={churchill_logo} className="churchill_logo" alt="Churchill Community College Logo"></img>
                    <p className='finished_date'> June 2016 </p>
                    <li className='university_text'> 11 GCSE'S A*-C </li>
                    <li className='university_text'> 5 A's, 4 B's and 2 C's </li>
                </div>

                <div class="grid-item">
                    <h2 className='educationName'> High School</h2>
                    <img src={churchill_logo} className="churchill_logo" alt="Churchill Community College Logo"></img>
                    <p className='finished_date'> July 2015 </p>
                    <li className='university_text'> Distinction* - BTEC ECDL </li>
                    <li className='university_text'> Pass - BTEC (Lvl 2) Business Studies </li>
                </div>
            </div>

        </div>




    )
}

export default Education