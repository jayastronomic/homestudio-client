import React, { Component } from 'react' 
import '../../SignUp.css'





const API = "http://localhost:3001/api/v1/users"

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            username: "",
            password: "",
            password_confirmation: "",
            street_address: "",
            city: "",
            state: "",
            zip_code: "",
            errors: ""
        }
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let user = {user: { 
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            username: this.state.username,
            password: this.state.password,
            password_confirmation: this.state.password_confirmation,
            street_address: this.state.street_address,
            city: this.state.city,
            state: this.state.state,
            zip_code: this.state.zip_code,
        }}
        const payload = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        }

        fetch(API, payload, {credentials: 'include'})
        .then(resp => resp.json())
        .then(obj => {
            if (obj.status === 'created') {
                this.props.handleLogin(obj)
                this.redirect()
            } else {
                this.setState({
                    errors: obj.errors
                })
            }
        })
        .catch(err => console.log(err))

        this.setState({
            first_name: "",
            last_name: "",
            email: "",
            username: "",
            password: "",
            password_confirmation: "",
            street_address: "",
            city: "",
            state: "",
            zip_code: "",
            errors: ""
        })
    }

    redirect = () => {
        this.props.history.push('/')
      }

      handleErrors = () => {
        return (
          <div>
            <ul>{this.state.errors.map((error) => {
              return <li key={error}>{error}</li>
            })}
            </ul> 
          </div>
        )
      }

      

    render(){
        return(
            <div className="signUpPage">
                <h2>sign up</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="firstName">First Name</label><br/>
                    <input type="text"  id="firstName" name="first_name" value={this.state.first_name} onChange={this.handleChange} /><br/>

                    <label htmlFor="lastNAme">Last Name</label><br/>
                    <input type="text"  id="lastName" name="last_name" value={this.state.last_name} onChange={this.handleChange} /><br/>

                    <label htmlFor="username">Username</label><br/>
                    <input type="text"  id="username" name="username" value={this.state.username} onChange={this.handleChange} /><br/>

                    <label htmlFor="email">Email</label><br/>
                    <input type="text"  id="email" name="email" value={this.state.email} onChange={this.handleChange} /><br/>

                    <label htmlFor="password">Password</label><br/>
                    <input type="text"  id="password" name="password" value={this.state.password} onChange={this.handleChange} /><br/>

                    <label htmlFor="password_confirmation">Re-Type Password</label><br/>
                    <input type="password"  id="password_confirmation" name="password_confirmation" value={this.state.password_confirmation} onChange={this.handleChange} /><br/>


                    <label htmlFor="streetAddress">Street Address</label><br/>
                    <input type="text"  id="streetAddress" name="street_address" value={this.state.street_address} onChange={this.handleChange} /><br/>

                    <label htmlFor="city">City</label><br/>
                    <input type="text"  id="city" name="city" value={this.state.city} onChange={this.handleChange} /><br/>

                    <label htmlFor="state">State</label><br/>
                    <input type="text"  id="state" name="state" value={this.state.state} onChange={this.handleChange} /><br/>

                    <label htmlFor="zipCode">Zip Code</label><br/>
                    <input type="text"  id="zipCode" name="zip_code" value={this.state.zip_code} onChange={this.handleChange} /><br/>  
                    
                    <input type="Submit" value="Create Account" />
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

export default SignUp;