import '../styles/Personal_Profile.css'
import profilepicture from "./images/profilepicture.jpg"
import profilepicture2 from "./images/profilepicture2.jpg"
import profilepicture3 from "./images/profilepicture3.jpg"
import email from "./images/email.png"
import phone from "./images/phone.png"
import download from "./images/download.png"
import linkedin_logo_small from "./images/linkedinsmall.png"
import github_logo_small from "./images/githubsmall.png"
import CVPDF from './CVPDF.pdf'
import { Link } from 'react-router-dom'
import React, { useState } from 'react';



const Personal_Profile = () => {

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let age = year - 2001;

    if (date > "06" && month > "03") {
        age = year - 2000;
    }

    const [isEmailPopupOpen, setEmailPopupOpen] = useState(false);
    const [isPhonePopupOpen, setPhonePopupOpen] = useState(false);

    const handleEmailButtonClick = () => {
        setEmailPopupOpen((isEmailPopupOpen)=>!isEmailPopupOpen);
        setPhonePopupOpen(false);
    };
    const handlePhoneButtonClick = () => {
        setEmailPopupOpen(false);
        setPhonePopupOpen((isPhonePopupOpen)=>!isPhonePopupOpen);
    };


    return (
        <div className='personal_profile'>

            <h2 className="profile_title"> Personal Profile </h2>


            <div class="personal_profile_grid">



                <div className="personal_profile_grid_item2">
                    <img src={profilepicture} className="bioPhoto" alt="Graduation"></img>
                    <img src={profilepicture2} className="bioPhoto" alt="Graduation"></img>
                    <img src={profilepicture3} className="bioPhoto" alt="Graduation"></img>

                    <div className="personal_profile_bio">
                        <p className="proText">I am an energetic, ambitious person who is determined to do well in any task I am given, or situation that I am presented with.
                            I work proactively within a team to achieve objectives on time, however I am also able to use my own initiative and work seperatly or as a leader if necessary.
                            I am able to work well both in a team environment as well as using my own initiative.
                        </p>
                        <p className="proText">I am flexible, reliable and possess excellent time keeping skills.
                            I am incredibly adaptive and I am able to learn new skills and coding languages as quick as necessary.
                        </p>
                    </div>

                </div>

                <div className="personal_profile_grid_item">
                        <div className={(isEmailPopupOpen == false) ? 'popup_content' : 'popup_content_expanded'} >
                            <img src={email} className="socialImage" alt="Email Clip Art"></img>
                            <span className="selected-popup-content"> brandondavidowens@gmail.com </span>
                        </div>

                        <div className={(isPhonePopupOpen == false) ? 'popup_content' : 'popup_content_expanded'} >
                            <img src={phone} className="socialImage" alt="Phone Clip Art"></img>
                            <p className="selected-popup-content"> 07922298918 </p>
                        </div>
                 
                    <div className="socials_container">

                        <div className="tooltip">
                            <Link to="https://github.com/itsbrandonowens" target="_blank"> <img src={github_logo_small} className="socialImage" alt="GitHub Logo"></img></Link>
                            <span className="tooltiptext"> Github </span>
                        </div>

                        <div className="tooltip">
                            <Link to="https://www.linkedin.com/in/brandondoatkinson/" target="_blank"> <img src={linkedin_logo_small} className="socialImage" alt="Linked In Logo"></img></Link>
                            <span className="tooltiptext"> LinkedIn </span>
                        </div>

                        <div className="tooltip">
                            <button className="contactButton" onClick={handleEmailButtonClick}> <img src={email} className="socialImage" alt="Email Clip Art"></img> </button>
                            <span className="tooltiptext"> Email </span>
                        </div>


                        <div className="tooltip">
                            <button className="contactButton" onClick={handlePhoneButtonClick}> <img src={phone} className="socialImage" alt="Phone Clip Art"></img> </button>
                            <span className="tooltiptext"> Phone Number </span>
                        </div>

                        <div className="tooltip">
                            <a href={CVPDF} target="_blank"><img src={download} className=" socialImage" alt="Download Clip Art"></img> </a>
                            <span className="tooltiptext"> Download CV </span>
                        </div>
                    </div>
                    <div className="about_me_container">
                        <h2 className="about_me_header">🙋🏻‍♂️ About Me</h2>
                        <p className="about_me_text"> My name is Brandon David Owens Atkinson and I'm {age} years old from Newcastle Upon Tyne.
                        </p>
                        <p className="about_me_text"> I have aspired to be a Software Developer since I was 12 years old, and since that time I have progressed myself by completing a Computer Science degree at the University of Northumbria with a 2:1
                            and by starting my Software Development experience at FDM Group. I hope to hone my skills and expand my knowledge in different coding languages to progress my career and become the best version of myself that I can be.
                        </p>
                        <p className="about_me_text"> I enjoy creating my own projects in different languages to learn different coding languages and increase my coding versatility, all of which can be found on my GitHub profile.
                        </p>
                        <p className="about_me_text">Thank you for taking the time to look at my CV in React, I created this to try and set myself apart from other candidates and I hope it has done enough for you to consider me for this position!
                        </p>
                    </div>
                </div>


            </div>

        </div>

    )
}

export default Personal_Profile