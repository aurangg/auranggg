import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css'

function Footer(){
    return(
        <div className="container" style={{maxWidth:"100%"}}>
            <div className="row" >
                <div className="col-12" style={{paddingLeft:"0px", paddingRight:"0px"}}>
                    <div className="footer-box">
                        <h2 className="connect">Connect <span className="connect-span">with me.</span></h2>
                        <div className="row" style={{width:"100%"}}>
                            <div className="col-2"></div>
                            <div className="col-lg-8">
                                <div className="footer-links">
                                    <a href="https://www.upwork.com/freelancers/~013a93a7ab6a22cea6" target="_blank" rel="noopener noreferrer">
                                        <h2 className="link">Upwork</h2>
                                    </a>
                                    <a href="https://www.linkedin.com/in/aurangzeb-khan/" target="_blank" rel="noopener noreferrer">
                                        <h2 className="link">LinkedIn</h2>
                                    </a>
                                    <a href="https://www.instagram.com/drawingsbyaurang/" target="_blank" rel="noopener noreferrer">
                                        <h2 className="link">Instagram</h2>
                                    </a>
                                    <a href="mailto:aurangzebbbk@gmail.com" target="_blank" rel="noopener noreferrer">
                                        <h2 className="link">Email</h2>
                                    </a>
                                </div>
                            </div>
                            <div className="col-2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;