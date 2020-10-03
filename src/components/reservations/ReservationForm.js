import React, { Component } from 'react'



const API = "http://localhost:3001/api/v1/reservations"

class ReservationForm extends Component {
    constructor(){
        super();
        this.state = {
            start_time: "",
            end_time: "",
            user_id: "",
            studio_id: "",
            confirmation: ""
        }
    }

    
    handleConfirmation = () => {
        return(
            <div>
                <p>Reservation Completed!</p>
            </div>
        )
    }
    handleChange = (e) => {
        console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const reservation = {reservation: {
            start_time: this.state.start_time,
            end_time: this.state.end_time,
            user_id: this.props.userId,
            studio_id: this.props.studioId
        }}

        const payload = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(reservation)
        }
        fetch(API, payload)
        .then(resp => resp.json())
        .then(obj => { 
            if (obj.status){
                this.setState({
                    confirmation: obj.status
                })
            }
        })

        
  
    }

  

    render(){
        console.log(this.props)
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="start_time">Start-Time:</label>
                <input type="datetime-local" id="start_time" name="start_time"  min="2020-09-27T16:30" max="2022-01-01T00:00" value={this.state.start_time} onChange={this.handleChange}></input><br/>
                <label htmlFor="end_time">End-Time:</label>
                <input type="datetime-local" id="end_time" name="end_time"  min="2020-09-27T16:30" max="2022-01-01T00:00" value={this.state.end_time} onChange={this.handleChange}></input><br/>

                <input type="submit" value="Reserve"/><br/>
                {this.state.confirmation === "COMPLETED" ? this.handleConfirmation()  : null}
            </form>
        )
    }


}

export default ReservationForm;