import React from 'react';
import dissimage1 from "./images/diss_image_1.png"
import dissimage2 from "./images/diss_image_2.png"
import dissimage3 from "./images/diss_image_3.png"
import dissimage4 from "./images/diss_image_4.png"

import '../styles/Portfolio.css'

class DissImageSlider extends React.Component {
  state = {
    images: [
      dissimage4,
      dissimage2,
      dissimage3,
      dissimage1,
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

export default DissImageSlider;