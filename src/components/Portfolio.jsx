import '../styles/Portfolio.css'
import DGImageSlider from './DGImageSlider';
import DissImageSlider from './DissImageSlider';
import FDMImageSlider from './FDMImageSlider';
import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import github_logo_small from "./images/githubsmall.png"
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
            <a href="https://github.com/itsbrandonowens"><p className="github_desc">  </p></a>
            <div>{data[currentIndex]}</div>
            <button className="previousButton" type="button" onClick={handlePrevClick}> &lt; </button>
            <div className="tooltip">
                <Link to="https://github.com/itsbrandonowens" target="_blank"> <img src={github_logo_small} className="socialImage" alt="GitHub Logo"></img></Link>
                <span className="tooltiptext"> My Github </span>
            </div>
            <button className="nextButton" type="button" onClick={handleNextClick}> &gt; </button>

        </div>

    )


}
export default Portfolio