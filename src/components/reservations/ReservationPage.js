import React from 'react'
import ReservationForm from './ReservationForm'
import '../../ReservationPage.css'



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
     
       console.log(props)
       const {studio, user} = props.location.state

        return(
    <div className="wrapper">
        <div className="reservationPage">
            <div className="reservationPage__content">
                <h3>{studio.name}</h3>
                <p>{studio.address}</p>
                <p>{studio.neighborhood}</p>
            </div>
            <div>
                <img alt="" src={studio.img}/>
            </div>
            <div>
                <ReservationForm userId={user.id} studioId={studio.id}/>
            </div>
        </div>
    </div>
        )
    // }
}

export default ReservationPage;