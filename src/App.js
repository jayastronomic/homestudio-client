import React, { Component } from 'react';
import Home from './components/Home'
// import Header from './components/Header'
import NavBar from './components/navbar/NavBar'
import { NavItem } from './components/navbar/NavBar'
import { DropdownMenu } from './components/navbar/NavBar'
import Footer from './components/Footer'
import SearchPage from './components/SearchPage'
import SignUp  from './components/registrations/SignUp'
import Login from './components/registrations/Login'
import ReservationPage from './components/reservations/ReservationPage'
import ReservationIndex from './components/reservations/ReservationIndex'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import Login2 from './components/registrations/Login2'

const API = "http://localhost:3001/api/v1/logged_in"
const API2 = "http://localhost:3001/api/v1/random"

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoggedIn: false,
      user: null,
      randomStudios: []
    }
  }
  
  componentDidMount(){
    this.loginStatus()
  }
  
  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user

    })
    this.handleFetchStudios()
  }
  
  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
      user: {}
    })
  }

  loginStatus = () => {
    fetch(API, {credentials: 'include'} )
    .then(resp => resp.json())
    .then(obj => {
      if (obj.logged_in) {
        // console.log(obj)
        this.handleLogin(obj)
      } else {
        console.log(obj.message)
        this.handleLogout()
        this.handleFetchStudios()
      }
    })
    .catch(err => console.log('api errors:', err))
  }

  async handleFetchStudios(){
    try {
    const resp = await fetch(API2, {credentials: "include"})
    const json = await resp.json()
      this.setState({
          randomStudios: json.studios
      })
  } catch (err) {
    console.log(err)
  }
}


  render(){
    console.log(this.state)
    return (
      //BEM 
      
        <Router>
          <NavBar /*user={this.state.user}*/  /*handleLogout={this.handleLogout} loggedInStatus={this.state.isLoggedIn}*/>
            <NavItem icon={<ExpandMoreIcon/>}>
              <DropdownMenu user={this.state.user} loggedIn={this.state.isLoggedIn}  handleLogout={this.handleLogout}/>
            </NavItem>
          </NavBar> 
          {/* <Header user={this.state.user}  handleLogout={this.handleLogout} loggedInStatus={this.state.isLoggedIn}/> */}
          <Switch>
            
            <Route exact path="/search" render={(props) => <SearchPage user={this.state.user} {...props} loggedInStatus={this.state.isLoggedIn} />} />
            <Route exact path="/" render={(props) => <Home {...props} studios={this.state.randomStudios} loggedInStatus={this.state.isLoggedIn} /> } />
            <Route exact path="/signup" render={(props) => <SignUp {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn} />} />
            <Route exact path="/login" render={(props) => <Login2 {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn} />} />
            {/* <Route exact path="/login" render={(props) => <Login {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn} />}/> */}
            <Route exact path="/reservation/:id" component={ReservationPage} />
            <Route exact path="/users/:user_id/reservations" component={ReservationIndex} />
            {/* <div className="push"></div>  */}
           </Switch >
          <Footer/>
        </Router>
        
    );
  }
}

export default App;
