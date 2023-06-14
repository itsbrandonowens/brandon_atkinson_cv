import '../styles/Portfolio.css'
import DissImageSlider from './DissImageSlider';
import FDMImageSlider from './FDMImageSlider';
import dissPDF from './thesis.pdf'

const Portfolio = () => {

    return (
        <div className="portfolioPage">
            <h1 className="portfolioPageTitle"> Portfolio </h1>

            <div class="portfolio_grid">
                <div class="portfolio_card">
                    <DissImageSlider />
                    <h2 className="portfolio_title"> Dissertation</h2>
                    <a href={dissPDF}><p className="links"> Evaluating the effects of crowd support in Virtual Reality </p></a>
                    <p className="portfolio_description"> I created a VR Basketball game in Unreal Engine 4 to test if the noise of a crowd would affect a players performance such as it does in real life sports.
                        I concluded that positive crowd noise positively affected the performance of the player while negative and silent crowds gave debatably inconclusive results. </p>
                </div>

                <div class="portfolio_card">
                    <FDMImageSlider />
                    <h2 className="portfolio_title"> FDM Group</h2>
                    <a href=""><p className="links"> Consultant Career Framework  </p></a>
                    <p className="portfolio_description"> I was Lead Developer in creating a Consultant Career Framework in Power Apps as per request from FDM Group. I first upskilled in PowerApps to ensure a great quality
                    product. This project was viewed by the CEO which helped push the app for a UK release. </p>
                </div>
            </div>
        </div>

    )


}
export default Portfolio