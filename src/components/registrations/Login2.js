import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../Login2.css'

const API = "http://localhost:3001/api/v1/login"

export default class Login2 extends Component {
	constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
            errors: ""
        };
	}
	
	UNSAFE_componentWillMount() {
        return this.props.loggedInStatus ? this.redirect() : null
      }


    handleSubmit = (e) => {
        e.preventDefault()
        const { email, password } = this.state;

        let user = {user: {
            email: email,
            password: password
        }};

        let payload = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user),
            credentials: 'include'
        };

        fetch(API, payload)
        .then(resp => resp.json())
        .then(obj => {
            if (obj.logged_in) {
                this.props.handleLogin(obj)
                this.redirect()
            } else {
                this.setState({
                    errors: obj.errors
                });
            };
        })
        .catch(err => console.log('api errors:', err));
    };

    redirect = () => {
        this.props.history.push('/')
      }

    handleErrors = () => {
        return (
            <div>
              <ul>
              {this.state.errors.map(error => {
              return <li key={error}>{error}</li>
                })}
              </ul>
            </div>
          )
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        });
    };


render(){
    return(
<div class="container" id="container">
	<div class="form-container sign-up-container">
		<form  >
			<h1>Create Account</h1>
			<div class="social-container">
				<a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
				<a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
				<a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
			</div>
			{/* <span>or use your email for registration</span>
			<input type="text" placeholder="Name" />
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<button>Sign Up</button> */}
		</form>
	</div>
	<div class="form-container sign-in-container">
		<form className="login-form" onSubmit={this.handleSubmit}>
			<h1>Log in</h1>
			<div class="social-container">
				<a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
				<a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
				<a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
			</div>
			
			<input className="login-input" type="email" placeholder="Email" name="email"value={this.state.email} onChange={this.handleChange}/>
			<input className="login-input" type="password" placeholder="Password" name="password"value={this.state.password} onChange={this.handleChange}/>
			<button className="login-button">Sign In</button>
		</form>
	</div>
	<div class="overlay-container">
		<div class="overlay">
			<div class="overlay-panel overlay-left">
				<h1>Welcome Back!</h1>
				<p>To keep connected with us please login with your personal info</p>
				<button class="ghost" id="signIn">Sign In</button>
			</div>
			<div class="overlay-panel overlay-right">
				<p>Don't have an Account?</p><br/>
				<Link  to="/signup"><button className="login-button" id="signUp">Sign Up</button></Link>
			</div>
			<div>
                    {
                    this.state.errors ? this.handleErrors() : null
                    } 
			</div>
		</div>
	</div>
	
</div>
    )
}


}