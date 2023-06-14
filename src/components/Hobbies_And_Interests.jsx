import '../styles/Hobbies_And_Interests.css'
import football from "./images/football.png"
import pcbuilding from "./images/pcbuilding.png"
const Hobbies_And_Interests = () => {

    const hobbies = [

        {
            title: 'PC Building',
            description: 'I love building and modifying PCs, I have built and maintained my own PC since I was 12 years old with consistant upgrades in parts.',
            image: pcbuilding,
        },

        {
            title: 'Football',
            description: 'I am a big Newcastle United fan and I really enjoy playing 5 aside weekly with my friends to keep myself fit.',
            image: football,
        } // JSON Formatting for adding in each hobby
    ]


    return (
        <div className="hobbies_interests">
            <h1 className="hobbiesPageTitle"> Hobbies and Interests </h1>
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