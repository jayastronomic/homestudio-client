import React from 'react'
import logo from '../logo.png'
import '../Header.css'
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from "@material-ui/core"
import { Link, useHistory} from 'react-router-dom'

const API = "http://localhost:3001/api/v1/logout"

const Header = (props) => {
    const history = useHistory()

    const handleClick = () => {
        fetch(API, {method: 'DELETE', credentials: 'include'})
            .then(resp => resp.json())
            .then(obj => {
                console.log(obj.logged_out)
                props.handleLogout()
                history.push('/')
            })
            .catch(err => console.log(err))
    }
    return (
        <div className="header">
            <Link to='/'><img className="header__icon" src={logo} /></Link>

            <div className="header__center">
                <input type="text"/>
                <SearchIcon/>
            </div>


            <div className="header__right">
                <Link to="/add_listing"><p>Add a listing</p></Link>
                <Link to="/signup">sign up</Link>
                {!props.loggedInStatus && <Link to="/login">login</Link>}
                {props.loggedInStatus && <Link to="/logout" onClick={handleClick}>logout</Link>}
                <LanguageIcon className="header__rightIcon__one"/>
                <ExpandMoreIcon className="header__rightIcon__two" />
                <Avatar className="header__rightIcon__three"/>
            </div>
        

        </div>
    )
}

export default Header;