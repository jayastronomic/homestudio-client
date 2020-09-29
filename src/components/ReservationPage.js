import React from 'react'
import ReservationForm from './ReservationForm'


const  ReservationPage = (props) => {
    // constructor(){
    //     super();
    //     this.state = {
    //         studio: {},
    //         user: {}
            
    //     }
    // }


    // componentDidMount(){
    //     this.setState({
    //         studioData: this.props.location.data
    //     })
    // }

    // render(){
        
        return(
            
        <div className="reservationPage">
            <div>
                
            </div>
            <div>
                <ReservationForm userId={props.location.state.user.id} studioId={props.location.state.studio.id}/>
            </div>
        </div>
        )
    // }
}

export default ReservationPage;