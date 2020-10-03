import React, { Component } from 'react'
import ReservationCard from '../components/reservations/ReservationCard'
import '../ReservationContainer.css'



class ReservationsContainer extends Component {
    constructor(){
        super();
        this.state = {
            userReservations: []
        }
    }


    async componentDidMount(){
        try {
        const resp = await fetch(`http://localhost:3001/api/v1/users/${this.props.user.id}/reservations`, {credentials: 'include'})
        const json = await resp.json()
            this.setState({
               userReservations: json
            })
            console.log(this.state.userReservations)
        } catch (err) {
            console.log(err)
        }
    }

    removeReservation = (obj) => {
        this.setState({
            userReservations: this.state.userReservations.filter(reservation => {
                    return reservation.id !== obj.data.id
                })
        })
    
    }


    render(){
        return(
            <div>
                <React.Fragment>
                    { this.state.userReservations.length !== 0 ?

                    this.state.userReservations.map((reservation, index) => {
                        return <ReservationCard key={index} removeReservation={this.removeReservation} {...reservation}/>
                    })
                :
                    <div className="no-reservation-title">
                        <h1>No Reservations Found</h1>
                    </div>
                
                    }
                </React.Fragment>
            </div>
        )
    }
}


export default ReservationsContainer;