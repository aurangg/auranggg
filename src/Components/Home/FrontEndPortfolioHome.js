import React from 'react';


function FrontEndPortfolioHome(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="portfolio-home">
                        <img className="portfolio-home-image" src={`${process.env.PUBLIC_URL}/assets/moneezen.png`} alt="menu-icon" />
                    </div>
                </div>
                <div className="col-12">
                    <div className="portfolio-home">
                        <img className="portfolio-home-image" src={`${process.env.PUBLIC_URL}/assets/sinecure.png`} alt="menu-icon" />
                    </div>
                </div>
                <div className="col-12">
                    <div className="portfolio-home">
                        <img className="portfolio-home-image" src={`${process.env.PUBLIC_URL}/assets/flashxchanger.png`} alt="menu-icon" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FrontEndPortfolioHome;