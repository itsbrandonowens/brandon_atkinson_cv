import React from 'react';
import fdmimage1 from "./images/fdm_image_1.png"
import fdmimage2 from "./images/fdm_image_2.png"
import fdmimage3 from "./images/fdm_image_3.png"
import fdmimage4 from "./images/fdm_image_4.png"


import '../styles/Portfolio.css'

class FDMImageSlider extends React.Component {
  state = {
    images: [
      fdmimage1,
      fdmimage2,
      fdmimage3,
      fdmimage4,

    ],
    currentIndex: 0
  }; // The images to scroll through

  componentDidMount() {
    this.startSlider();
  }

  componentWillUnmount() {
    this.stopSlider();
  }

  startSlider = () => {
    this.sliderInterval = setInterval(() => {
      const { images, currentIndex } = this.state;
      const nextIndex = (currentIndex + 1) % images.length;
      this.setState({ currentIndex: nextIndex });
    }, 5000);
  }; // Change the duration (in milliseconds) between slides as needed

  stopSlider = () => {
    clearInterval(this.sliderInterval);
  };

  render() {
    const { images, currentIndex } = this.state;
    const currentImage = images[currentIndex];

    return (
      <div class="portfolio_card">
        <div class="grid-container2">
          <div class="grid-item2">
            <img className="portfolio_image_diss" src={currentImage} alt={`Image ${currentIndex}`} />
          </div>
          <div class="grid-item2">
            <h2 className="portfolio_title"> FDM Group</h2>
            <a href="" target="_blank"><p className="links" > Consultant Career Framework  </p></a>
            <p className="portfolio_description"> I was Lead Developer in creating a Consultant Career Framework in Power Apps as per request from FDM Group. I first upskilled in PowerApps to ensure a great quality
              product. This project was viewed by the CEO which helped push the app for a UK release. </p>
          </div>
        </div>
      </div>
    );
  }
}

export default FDMImageSlider;