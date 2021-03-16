import React from 'react';
import background from './design-bg.svg'

function DesignHome(){
    return(
        <React.Fragment>
            <div className="container" style={{maxWidth:"100%"}}>
                <div className="row">
                    <div className="col-12">
                        <div className="design-info" style={{backgroundImage:`url(${background})`}}>
                            <h4 className="design-text">
                                By designing accessible interfaces, I make digital products <span className="design-text-span">usable for everyone</span>.
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default DesignHome;