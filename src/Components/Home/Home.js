import React from 'react';
import Banner from './Banner';
import NiceToMeet from './NiceToMeet';
import './home.css';
import DesignHome from './DesignHome';
import PortfolioHome from './PortfolioHome';
import FrontEndHome from './FrontEndHome';
import FrontEndPortfolioHome from './FrontEndPortfolioHome';
import Footer from '../Footer/Footer';

function Home(){
    return(
        <React.Fragment>
            <Banner />
            <NiceToMeet />
            <DesignHome />
            <PortfolioHome />
            <FrontEndHome />
            <FrontEndPortfolioHome />
            <Footer />
        </React.Fragment>
    )
}

export default Home;