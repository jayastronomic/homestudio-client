import React from 'react'
import logo from '../logo.png'
import '../Header.css'


const Header = () => {
    return (
        <div className="header">
            <img className="header__icon" src={logo} />

            <div classNAme="header__center">
                <input type="text"/>
                <SearchIcon/>
            </div>
        

        </div>
    )
}

export default Header;