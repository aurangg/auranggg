import React from 'react';
import background from './front-end-bg.svg'

function FrontEndHome(){
    return(
        <React.Fragment>
            <div className="container" style={{maxWidth:"100%"}}>
                <div className="row">
                    <div className="col-12">
                        <div className="design-info" style={{backgroundImage:`url(${background})`}}>
                            <h4 className="design-text">
                                By <span className="design-text-span">developing</span> extensive UI, I make designs come <span className="design-text-span">alive, responsive</span> and <span className="design-text-span">interactive</span>.
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default FrontEndHome;