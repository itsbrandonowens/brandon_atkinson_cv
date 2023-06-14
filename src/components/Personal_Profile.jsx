import '../styles/Personal_Profile.css'
import profilepicture from "./images/profilepicture.jpg"

const Personal_Profile = () => {

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let age = year - 2001;
    if (date > "06" && month > "03") {
        age = year - 2000;
    } // automatically updates my age so I don't have to remember to update my age every year 
    return (
        <div className='personal_profile'>
            <h1 className="profile_title"> Personal Profile </h1>


            <div class="personal_profile_grid">

                <div class="personal_profile_grid_item">
                    <p className="proText"> My name is Brandon David Owens Atkinson and I'm {age} years old. I have aspired to be a Software Developer since the age of 12.  </p>
                    <p className="proText">I am an energetic, ambitious person who is determined to do well in any task I am given, or situation that I am presented with.
                        I am excellent in working with others to achieve objectives on time.
                        I am able to work well both in a team environment as well as using my own initiative. I am flexible, reliable and possess excellent time keeping skills.
                        I am incredible adaptive and I am able to learn new skills and coding languages as quick as necessary as proven by my dissertation and experience in FDM Group.</p>
                    <p className="proText">Thank you for taking the time to look at my CV in React, I hope it impresses you enough to consider me for this position! </p>
                </div>

                <div class="personal_profile_grid_item2">
                    <img src={profilepicture} className="bioPhoto" alt="Graduation"></img>
                    <p className="bioTextName">Brandon David Atkinson</p>
                    <p className="bioText">DOB: 06/03/2000</p>
                    <p className="bioText">Email: brandondavidowens@gmail.com</p>
                    <p className="bioText">Phone: 07922298918</p>
                </div>


            </div>

        </div>

    )
}

export default Personal_Profile