import React from 'react'
import './Header.css'

import PhoneIcon from '@material-ui/icons/Phone';

export const Header = () => {
    return (
        <div className="header">
        <div className="headerContainer">
                <img className="header__logo" src="/images/mainlogo.jpg" alt=""/>
            
            <div className="header__options">
                <div className="header__topOptions">
                <div className="header__option">Home</div>
                <div className="header__option">About</div>
                <div className="header__option">Contact</div>
                </div>
                <div className="header__bottomOptions">
                <div className="header__bottomOption"><PhoneIcon /> 123456789</div>
                </div>
            </div>
        </div>
        <div className="headerBody"></div>
        </div>
    )
}
