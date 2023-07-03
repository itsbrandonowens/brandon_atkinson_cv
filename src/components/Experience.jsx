import '../styles/Experience.css'
import fdm_logo from "./images/fdm_logo.gif"
import one_stop_logo from "./images/one_stop_logo.png"
import hm_logo from "./images/hm_logo.png"

const Experience = () => {

    return (
        <div className="experiences">
            <h2 className="experiencesTitle"> Experiences </h2>
            <div class="experience_grid">

                <div className="experience_grid_item">
                    <div className="miniGrid">
                        <h2 className='occupation_text'> Java Development Consultant </h2>
                        <img src={fdm_logo} className="fdm_logo" alt="FDM Group Logo"></img>
                        <p className='occupation_date'> September 2022 - Current  </p> 
                        <li className='occupation_details'>14 weeks of Training in Java, React, JavaScript, SQL, UNIX and Spring Framework  </li>
                        <li className='occupation_details'>Lead Developer while creating a Consultant Career Framework for the company using PowerApps  </li>
                    </div>
                </div>

                <div className="experience_grid_item">
                    <div className="miniGrid">
                        <h2 className='occupation_text'> Customer Service Assistant </h2>
                        <img src={one_stop_logo} className="one_stop_logo" alt="One Stop Logo"></img>
                        <p className='occupation_date'> July 2021 - September 2022  </p>
                    </div>
                </div>

                <div className="experience_grid_item">
                    <div className="miniGrid">
                        <h2 className='occupation_text'> Customer Sales Assistant </h2>
                        <img src={hm_logo} className="hm_logo" alt="H&M Logo"></img>
                        <p className='occupation_date'> September 2017 - July 2021  </p>
                    </div>
                </div>

            </div>
        </div>
    )


}
export default Experience