import React from 'react';
import { useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
// import { HomeIcon } from '@material-ui/icons/Home'
// import { ChevronRightIcon } from '@material-ui/icons/ChevronRight'
// import SettingsIcon from '@material-ui/icons/Settings';
// import { CSSTransition } from 'react-transition-group'

import '../../NavBar.css'
import logo from '../../logo.png'

const API = "http://localhost:3001/api/v1/logout"





export const DropdownMenu = (props) => {

const user = props.user


    const handleClick = () => {
        fetch(API, {method: 'DELETE', credentials: 'include'})
            .then(resp => resp.json())
            .then(obj => {
                console.log(obj.logged_out)
                props.handleLogout()
                history.push()
            })
            .catch(err => console.log(err))
    }

const history = useHistory()

  function DropdownItem(props){

    
        return(
            <p  className="menu-item" >
                <span className="icon-button"><i className={props.icon}></i></span>
                {props.children}
            </p>
        )
    }
    console.log(props)
    return(
        <div className="dropdown">
                <DropdownItem icon="fas fa-home"><Link to="/">Home</Link></DropdownItem>
                {!props.loggedIn && <DropdownItem icon="fas fa-cog"><Link to="/login">Login</Link></DropdownItem>}
                {props.loggedIn && <DropdownItem icon="fas fa-microphone-alt"><Link to={{
                    pathname: `/users/${user.id}/reservations`,
                    state: {
                        user: user
                    }
                }}>My Reservations</Link></DropdownItem>}
                {!props.loggedIn && <DropdownItem icon="fas fa-user-plus"><Link to='/signup'>sign up</Link></DropdownItem>}
                {props.loggedIn && <DropdownItem icon="fas fa-sign-out-alt"><Link to='/'onClick={() => handleClick()}>Goodbye {`${user.first_name}`}</Link></DropdownItem>}
        </div>
    )
}

export const NavItem = (props) => {
    const [open, setOpen] = useState(false)
    return(
        <li className="nav-item" onClick={() => setOpen(!open)}>
            <a href="#" className="icon-button">
                {props.icon}
            </a>

            {open && props.children}
        </li>
    )
}

export default function NavBar(props){
    return(
        <nav className="navbar">
            <Link to='/'><img alt="" className="navbar-logo"  src={logo} /></Link>
            <ul className="navbar-nav">{props.children}</ul>
        </nav>
    )
}







{/* <li className="nav-item">
            <a href="#" className="icon-button">
                {props.icon}
            </a>
        </li> */}




 