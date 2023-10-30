import React from 'react';
import dissimage1 from "./images/diss_image_1.png"
import dissimage2 from "./images/diss_image_2.png"
import dissimage3 from "./images/diss_image_3.png"
import dissimage4 from "./images/diss_image_4.png"
import '../styles/Portfolio.css'
import dissPDF from './thesis.pdf'

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
        <img className="portfolio_image_diss" src={currentImage} alt={`Image ${currentIndex}`} />
        <h2 className="portfolio_title"> Dissertation</h2>
        <a href={dissPDF}><p className="links"> Evaluating the effects of crowd support in Virtual Reality </p></a>
        <p className="portfolio_description"> 
        I created a VR Basketball game in Unreal Engine 4 to test if the noise of a virtual crowd would affect a players performance such as it does in real life sports.
          I concluded that positive crowd noise positively affected the performance of the player while negative and silent crowds gave debatably inconclusive results.
          I had no prior experience in Unreal Engine 4 before this project. I picked it up from scratch and taught myself all I could to ensure I completed it with the best 
          quality possible, achieving a First.  </p>
      </div>
    ); 
  }
}

export default DissImageSlider;