import React from 'react'
import logo from '../logo.png'
import '../Header.css'
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from "@material-ui/core"
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <div className="header">
            <Link to='/'><img className="header__icon" src={logo} /></Link>

            <div className="header__center">
                <input type="text"/>
                <SearchIcon/>
            </div>

            <div className="header__right">
                <p>Become a Host</p>
                <LanguageIcon/>
                <ExpandMoreIcon/>
                <Avatar />
            </div>
        

        </div>
    )
}

export default Header;