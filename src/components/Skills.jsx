import '../styles/Skills.css'

const Skills = () => {

    return (
        <div className="skills">

            <h2 className="skillsTitle"> Skills </h2>


            <div className="skills_grid">
                <div className="skills_grid_item">
                    <h2>Skills Gained From Experiences</h2>
                    <li className="skills_text"> I was lead developer in an internal placement at FDM Group where I created a Consultant Career Framework using PowerApps.
                        This app was released for all consultants in the company to use throughout the UK and currently has plans to be used for all consultants globally.
                        This gave me skills in work management and ensuring deadlines are met. This also gave me firsthand experience in how app creation and publication work in a business environment.
                    </li>
                    <li className="skills_text">
                        I completed the TechSkills Software Development Foundation Certificate during my training at FDM Group. This included 14 weeks of training in
                        languages such as Java, HTML, JavaScript, SQL, and frameworks such as React and Spring Rest. This training also included a week in Agile methodology, particularly focusing on the Scrum framework.
                    </li>
                    <li className="skills_text">
                        I am self-taught in Unreal Engine 4 through my dissertation project at university where I created a Virtual Reality
                        basketball game from scratch. This taught me skills in perseverance and proves that I can complete any task that I put my mind to.
                    </li>

                    <li className="skills_text">

                        I took part in an Industrial Cadets scheme at Accenture as work experience which helped increase my teamwork skills,
                        presentational skills and increased my knowledge and awareness of how different businesses can cooperate with each other.
                    </li>

                    <li className="skills_text">
                        I took part in the National Citizen Service at the age of 16. This helped me become more independent. I completed several activities, which helped develop teamwork skills,
                        as I had to interact with people I had never met before. I also took part in several workshops to help build confidence and other life skills. I also took part in a level one Cadet First Aid training course.
                        As a team, we built a garden for people with dementia from scratch, which gave me skills in D.I.Y and working efficiently as a team.
                        We also took part in a Dementia Friends workshop. NCS gave me good social skills, team working skills, flexibility and determination in hard tasks and helped me gain the confidence to talk to anybody very easily.
                    </li>
                    <li className="skills_text">
                        I completed an online video game design course at the age of 15 at the School of Interactive Design. This gave me knowledge of several different software such as Game Salad, Unity 5, Maya and Photoshop.
                    </li>
                </div>

                <div className="skills_grid_item2">
                    <h2>Confidence in Languages and Frameworks</h2>

                    <span className="languageNameJava">Java</span>
                    <span className="languagePercentJava">70%</span>
                    <div class="slidecontainer">
                        <input type="range" min="1" max="100" value="70" class="slider" id="myRange"></input>
                    </div>

                    <span className="languageNameHTML">HTML/CSS</span>
                    <span className="languagePercentHTML">80%</span>
                    <div class="slidecontainer">
                        <input type="range" min="1" max="100" value="80" class="slider" id="myRange"></input>
                    </div>

                    <span className="languageNameReact">React</span>
                    <span className="languagePercentReact">70%</span>
                    <div class="slidecontainer">
                        <input type="range" min="1" max="100" value="70" class="slider" id="myRange"></input>
                    </div>

                    <span className="languageNameSQL">SQL</span>
                    <span className="languagePercentSQL">80%</span>
                    <div class="slidecontainer">
                        <input type="range" min="1" max="100" value="80" class="slider" id="myRange"></input>
                    </div>

                    <span className="languageNameJS">JavaScript</span>
                    <span className="languagePercentJS">70%</span>
                    <div class="slidecontainer">
                        <input type="range" min="1" max="100" value="70" class="slider" id="myRange" ></input>
                    </div>

                    <span className="languageNameUnreal">Unreal Engine 4</span>
                    <span className="languagePercentUnreal">60%</span>
                    <div class="slidecontainer">
                        <input type="range" min="1" max="100" value="60" class="slider" id="myRange"></input>
                    </div>

                    <span className="languageNamePython">Python</span>
                    <span className="languagePercentPython">60%</span>
                    <div class="slidecontainer">
                        <input type="range" min="1" max="100" value="60" class="slider" id="myRange"></input>
                    </div>



                </div>
            </div>

        </div>
    )


}
export default Skills