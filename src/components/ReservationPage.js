import React, { Component } from 'react'
import ReservationForm from './ReservationForm'


class  ReservationPage extends Component {
    constructor(){
        super();
        this.state = {
            studioInfo: {}
        }
    }


    componentDidMount(){
        this.setState({
            studioInfo: this.props.location.state.studioInfo
        })
    }

    render(){
        return(
        <div className="reservationPage">
            <div>

            </div>
            <div>
                <ReservationForm studioId={this.state.studioInfo.id}/>
            </div>
        </div>
        )
    }
}

export default ReservationPage;