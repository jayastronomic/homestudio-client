import React, { Component } from 'react';
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import SearchPage from './components/SearchPage'
import SignUp  from './components/registrations/SignUp'
import Login from './components/registrations/Login'
import ReservationPage from './components/ReservationPage'
import GoMap from './components/Map'
import ReservationIndex from './components/ReservationIndex'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'


const API = "http://localhost:3001/api/v1/logged_in"

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoggedIn: false,
      user: {}
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
        this.handleLogin(obj)
      } else {
        console.log(obj.message)
        this.handleLogout()
      }
    })
    .catch(err => console.log('api errors:', err))
  }


  render(){
    return (
      //BEM 
      <div className="app">
        <Router>
          <Header  handleLogout={this.handleLogout} loggedInStatus={this.state.isLoggedIn}/>

          <Switch>
            <Route exact path="/search" render={(props) => <SearchPage user={this.state.user} {...props} loggedInStatus={this.state.isLoggedIn} />} />
            <Route exact path="/" render={(props) => <Home {...props} loggedInStatus={this.state.isLoggedIn} /> } />
            <Route exact path="/signup" render={(props) => <SignUp {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn} />} />
            <Route exact path="/login" render={(props) => <Login {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn} />}/>
            <Route exact path="/map" render={()=> <GoMap /> } />
            <Route exact path="/reservation/:id" component={ReservationPage} />
            <Route exact path="/reservations" render={() => <ReservationIndex user={this.state.user} />} />
          </Switch >

          <Footer/>
        </Router>
      </div>
    );
  }
}

export default App;
