import React from 'react';
import './home.css'

function Banner(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="banner">
                        <h2 className="banner-heading">
                            Smooth <span className="banner-heading-span">Design</span> Experiences <br /> with <span className="banner-heading-span">Front End</span> Development
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;