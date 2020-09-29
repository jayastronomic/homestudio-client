import React from 'react';
import ReservationsContainer from '../containers/ReservationsContainer'


const ReservationIndex = (props) => {


    return(
        <div className="reservation">
            <h1>List of Reservations</h1>
            <div>
                <ReservationsContainer user={props.user}/>
            </div>
        </div>
    )
}


export default ReservationIndex