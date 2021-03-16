import React from 'react';
import Toggle from '../SideDrawer/Toggle';
import {Link} from 'react-router-dom'
import './toolbar.css';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar-navigation">
            {/* <Toggle click={props.drawerClickHandler} /> */}
            <Link to="/">
                <div className="toolbar-logo">
                    <img src={`${process.env.PUBLIC_URL}/assets/logo.svg`} alt="menu-icon" />
                </div>
            </Link>
            <div className="spacer"></div>
            {/* <div className="toolbar-navigation-items">
                <ul>
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/portfolio">
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            About
                        </Link>
                    </li>
                </ul>
            </div> */}
        </nav>
    </header>
)

export default toolbar;