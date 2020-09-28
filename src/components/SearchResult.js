import  FavoriteBorderIcon  from '@material-ui/icons/FavoriteBorder'
import StarIcon from '@material-ui/icons/Star'
import React from 'react'
import '../SearchResult.css'
import {  Link } from 'react-router-dom'

const SearchResult = (props) => {
 
    
    return(
            <div className="searchResult">
                <img src={props.img} alt="" />
                <FavoriteBorderIcon className="searchResult__heart" />

                <div className="searchResult__info">
                    <div className="searchResult__infoTop">
                        <p>{props.city}</p>
                        <h3>{props.name}</h3>
                        <p>____</p>
                        <p>{props.description}</p>
                    </div>
                    <div className="searchResult__infoBottom">
                        <div className="searchResult__stars">
                            <StarIcon className="searchResult__star"/>
                            <p><strong>4.5</strong></p>
                            <div className="searchResult__button">
                                <Link to={{
                                    pathname: `/reservation/${props.id}`,
                                    state: {
                                        studioInfo: props
                                    }
                                }}>Make a Reservation</Link>
                            </div>
                        </div>
                        <div className="searchResult__price">
                            <h2>{props.price}/hr</h2>
                            <p>{props.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    
 
}


export default SearchResult