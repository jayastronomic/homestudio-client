import React from 'react';
import ReservationsContainer from '../../containers/ReservationsContainer'
import '../../ReservationContainer.css'


const ReservationIndex = (props) => {

const user = props.location.state.user
console.log(user)
    return(
        <div className="reservation">
            <div className="reservation-title">
                <h1>My Reservations</h1>
            </div>
            
            <div>
                <ReservationsContainer user={user}/>
            </div>
        </div>
    )
}


export default ReservationIndex;