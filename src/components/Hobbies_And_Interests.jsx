import '../styles/Hobbies_And_Interests.css'
import football from "./images/football.png"
import pcbuilding from "./images/pcbuilding.png"
import coding from "./images/coding.jpg"
import travel from "./images/travel.jpg"
const Hobbies_And_Interests = () => {

    const hobbies = [

        {
            title: 'PC Building',
            description: 'I love building and modifying PCs, I have built and maintained my own PC since I was 12 years old. I have consistantly upgraded parts to the PC such as replacing my CPU, Graphics Case and replacing my HDD with a much faster SSD.',
            image: pcbuilding,
        },

        {
            title: 'Coding',
            description: 'I really enjoy making projects from scratch and testing my knowledge in different coding languages. I always had an interest in this, however learning Unreal Engine 4 from scratch for my dissertation really heightened this as a hobby.',
            image: coding,
        },

        {
            title: 'Travel',
            description: 'I really enjoy traveling to different countries and experiencing different cultures around the world, this came from me visiting India when I was 16 and being intrigued in the vastly different culture they have.',
            image: travel,
        },
 
        {
            title: 'Football',
            description: 'I am a big Newcastle United fan and I really enjoy playing 5 aside weekly with my friends to keep myself fit.',
            image: football,
        } // JSON Formatting for adding in each hobby
    ]


    return (
        <div className="hobbies_interests">
            <h2 className="hobbiesPageTitle"> Hobbies and Interests </h2>
            <div class="hobbies_grid">
                {hobbies.map((hobby, index) => (
                    <div key={index} className="hobby-card">
                        <img className="hobby_image" src={hobby.image} alt={hobby.title} />
                        <h2 className="hobby_title">{hobby.title}</h2>
                        <p className="hobby_description">{hobby.description}</p>
                    </div> // This maps each hobby to an individual card depending on how many are added in the const "hobbies"
                ))}
            </div>
        </div>

    )


}
export default Hobbies_And_Interests