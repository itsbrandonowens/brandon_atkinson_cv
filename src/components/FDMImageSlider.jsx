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
    }, 6000); 
  }; // Change the duration (in milliseconds) between slides as needed

  stopSlider = () => {
    clearInterval(this.sliderInterval);
  };

  render() {
    const { images, currentIndex } = this.state;
    const currentImage = images[currentIndex];

    return (
      <div className="image-slider">
        <img className="portfolio_image_diss" src={currentImage} alt={`Image ${currentIndex}`} />
      </div>
    );
  }
}

export default FDMImageSlider;