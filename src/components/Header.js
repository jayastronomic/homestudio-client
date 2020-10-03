import React from 'react'
import logo from '../logo.png'
import '../Header.css'
// import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from "@material-ui/core"
import { Link, useHistory} from 'react-router-dom'


const API = "http://localhost:3001/api/v1/logout"



const Header = (props) => {



}



      // !-------------IMPORTANT-----------------!
        // <div className="header">
        //     <Link to='/'><img  className="header__icon" alt="" src={logo} /></Link>

        //     {/* <div className="header__center">
        //         <input type="text"/>
        //         <SearchIcon/>
        //     </div> */}


        //     <div className="header__right">
        //         <Link to="/add_listing"><p>Add a listing</p></Link>
        //         {!props.loggedInStatus && <Link to="/signup">sign up</Link>}
        //         {!props.loggedInStatus && <Link to="/login">login</Link>}
        //         {props.loggedInStatus && <Link to="/logout" onClick={handleClick}>logout</Link>}
        //         <Link to={{
        //              pathname: `/users/${props.user.id}/reservations`,
        //              state: {
        //                  user: props.user
        //              }
        //              }}>My Reservations</Link>
        //         <LanguageIcon className="header__rightIcon__one"/>
        //         {/* <Dropdown handleLogout={props.handleLogout} items={items} className="header__rightIcon__two"/> */}
        //         {/* <ExpandMoreIcon className="header__rightIcon__two" /> */}
        //         <Avatar className="header__rightIcon__three"/>
        //     </div>
        

        // </div>






 // !-------IMPORTANT-----------!
    // const history = useHistory()

    // const handleClick = () => {
    //     fetch(API, {method: 'DELETE', credentials: 'include'})
    //         .then(resp => resp.json())
    //         .then(obj => {
    //             console.log(obj.logged_out)
    //             props.handleLogout()
    //             history.push('/')
    //         })
    //         .catch(err => console.log(err))
    // }





























export default Header;