import '../styles/Portfolio.css'
import DissImageSlider from './DissImageSlider';
import FDMImageSlider from './FDMImageSlider';
import React, { useState } from 'react';

const Portfolio = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const data = [

        <DissImageSlider/> ,
        <FDMImageSlider/>
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
            <p>{data[currentIndex]}</p>
            <button className="previousButton" type="button" onClick={handlePrevClick}> &lt; </button>
            <button className="nextButton" type="button" onClick={handleNextClick}> &gt; </button>
        </div>

    )


}
export default Portfolio