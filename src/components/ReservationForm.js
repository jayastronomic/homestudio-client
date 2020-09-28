import React, { Component } from 'react'


const API = "http://localhost:3001/api/v1/reservations"
class ReservationForm extends Component {
    constructor(){
        super();
        this.state = {
            start_time: "",
            end_time: "",
            user_id: "46ec619a-dec7-443c-820a-7a121e913c98",
            studio_id: ""
        }
    }

    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const reservation = {
            start_time: this.state.start_time,
            end_time: this.state.end_time,
            user_id: this.state.user_id,
            studio_id: this.props.studioId
        }

        const payload = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(reservation)
        }
        fetch(API, payload)
        .then(resp => resp.json())
        .then(obj => console.log(obj))

        this.setState({
            start_time: "",
            end_time: "",
            user_id: "46ec619a-dec7-443c-820a-7a121e913c98",
            studio_id: ""
        })
    }

    render(){
        const studioID = this.props.studioId
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="start_time">start</label><br/>
                <input type="datetime-local" id="start_time" name="start_time"  min="2020-09-27T16:30" max="2022-01-01T00:00" value={this.state.start_time} onChange={this.handleChange}></input><br/>
                <label htmlFor="end_time">end</label><br/>
                <input type="datetime-local" id="end_time" name="end_time"  min="2020-09-27T16:30" max="2022-01-01T00:00" value={this.state.end_time} onChange={this.handleChange}></input><br/>
                <input type="hidden" name="user_id" value="46ec619a-dec7-443c-820a-7a121e913c98"  />
                <input type="hidden" name="studio_id" value={studioID}  />
                <input type="submit" value="Reserve"/>
            </form>
        )
    }


}

export default ReservationForm;