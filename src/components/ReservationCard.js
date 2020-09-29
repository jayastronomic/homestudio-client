import React from 'react';
import '../ReservationCard.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider'


const useStyles = makeStyles({
    root: {
        minWidth: 275
    }
})

const ReservationCard = (props) => {

    const handleDelete = (id) => {
        fetch(`http://localhost:3001/api/v1/reservations/${id}`, {method: 'DELETE', credentials: "include"})
        .then(resp => resp.json())
        .then(obj => {
            console.log(obj)
            props.removeReservation(obj)
        })
        .catch(err => console.log(err))
    }



   const classes = useStyles()

    return(
    <div className="reservationCard">
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {props.studio.name}
                </Typography> 
                <Divider variant="middle"/>
                <div className="reservationCard__button">
                    <Button onClick={() => handleDelete(props.id)}>Cancel Reservation</Button>
                </div>
            </CardContent>   
        </Card>
    </div>
    )
}

export default ReservationCard;