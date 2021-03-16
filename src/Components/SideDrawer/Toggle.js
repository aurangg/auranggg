import React from 'react';
import './toggle.css';

const toggleButton = props => (
    <button className="toggle-button" onClick={props.click}>
        <img src={`${process.env.PUBLIC_URL}/img/icons/menu-hamburger.svg`} alt="menu-icon" />
    </button>
)

export default toggleButton;