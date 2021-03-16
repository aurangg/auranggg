import React from 'react';
import background from "./nice-to-meet-you.webp";

function NiceToMeet(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="nice-to-meet" 
                    style={{backgroundImage:`url(${background})`}}>
                        <div className="row" style={{width:"100%"}}>
                            <div className="col-12">
                                <h2 className="nice-to-meet-text">
                                    Nice To Meet You
                                </h2>
                                {/* <p className="nice-to-meet-about">
                                    About Me
                                </p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NiceToMeet;