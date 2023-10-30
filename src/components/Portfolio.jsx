import '../styles/Portfolio.css'
import DGImageSlider from './DGImageSlider';
import DissImageSlider from './DissImageSlider';
import FDMImageSlider from './FDMImageSlider';
import React, { useState } from 'react';

const Portfolio = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const data = [

        <DissImageSlider />,
        <FDMImageSlider />,
        <DGImageSlider />
    ]

    const handlePrevClick = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
        console.log("Prev");
    };

    const handleNextClick = () => {
        if (currentIndex < data.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
        console.log("Next");
    };


    return (
        <div className="portfolioPage">
            <h2 className="portfolioPageTitle"> Portfolio </h2>
            <a href= "https://github.com/itsbrandonowens"><p className="github_desc"> Check out my GitHub for all of the code to my projects! </p></a>
            <div className="portfolio_grid">
                <button className="previousButton" type="button" onClick={handlePrevClick}> &lt; </button>
                <p>{data[currentIndex]}</p>
                <button className="nextButton" type="button" onClick={handleNextClick}> &gt; </button>
            </div>

        </div> 

    )


}
export default Portfolio