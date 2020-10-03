import React, { Component } from 'react';
import { Link } from 'react-router-dom'


const API = "http://localhost:3001/api/v1/login"
class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
            errors: ""
        };
    }



    handleSubmit = (e) => {
        e.preventDefault()
        const {username, email, password } = this.state;

        let user = {user: {
            username: username,
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
            <div className="login">
                <h1>Login</h1>
                <form className="login-form" onSubmit={this.handleSubmit}>
                    <label htmlFor="">username</label><br/>
                    <input type="text" placeholder="Username" name="username" value={this.state.username} onChange={this.handleChange}/><br/>

                    <label htmlFor="">email</label><br/>
                    <input type="text" placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange}/><br/>

                    <label htmlFor="">password</label><br/>
                    <input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange}/><br/>

                    <input placeholder="submit" type="submit" value="submit"/><br/>
                    <div>
                    <Link to='/signup'>sign up</Link>
                    </div>

                </form>
                <div>
                    {
                    this.state.errors ? this.handleErrors() : null
                    }
                </div>
            </div>
        )
    }


}

export default Login;