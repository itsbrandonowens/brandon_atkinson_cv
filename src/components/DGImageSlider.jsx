import React from 'react';
import dgimage1 from "./images/dg_image_1.png"
import dgimage2 from "./images/dg_image_2.png"
import dgimage3 from "./images/dg_image_3.png"
import dgimage4 from "./images/dg_image_4.png"
import dgimage5 from "./images/dg_image_5.png"
import dgimage6 from "./images/dg_image_6.png"
import '../styles/Portfolio.css'

class DGImageSlider extends React.Component {


  state = {
    images: [
      dgimage1,
      dgimage2,
      dgimage3,
      dgimage4,
      dgimage5,
      dgimage6,
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
        <h2 className="portfolio_title"> ReactJS Drinking Game</h2>
        <a href= "https://itsbrandonowens.github.io/brandons_drinking_game/"><p className="links"> Brandon's Drinking Game </p></a>
        <p className="portfolio_description"> 
        I was getting bored of generic drinking games that me and my friends would play so I decided to create my own. This was created in ReactJS. There are different coloured cards which do different 
        things. Different coloured cards do different things, therefore some cards appear rarer than others. There are cards that include a video prompt, cards that allow you to spin a wheel which
        includes a forfeit, regular cards and cards that allow you to play higher or lower. This game has been well recieved by my friends and shows that I have a passion in creating solutions via coding
        to any problem that is thrown my way. </p>
      </div>
    );
  }
}

export default DGImageSlider;