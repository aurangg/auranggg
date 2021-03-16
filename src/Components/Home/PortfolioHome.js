import React from 'react';


function PortfolioHome(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="portfolio-home">
                        <img className="portfolio-home-image" src={`${process.env.PUBLIC_URL}/assets/acasa.png`} alt="menu-icon" />
                    </div>
                </div>
                <div className="col-12">
                    <div className="portfolio-home">
                        <img className="portfolio-home-image" src={`${process.env.PUBLIC_URL}/assets/milestone-sp.png`} alt="menu-icon" />
                    </div>
                </div>
                <div className="col-12">
                    <div className="portfolio-home">
                        <img className="portfolio-home-image" src={`${process.env.PUBLIC_URL}/assets/nyc-app.png`} alt="menu-icon" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PortfolioHome;