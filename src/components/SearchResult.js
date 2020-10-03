import  FavoriteBorderIcon  from '@material-ui/icons/FavoriteBorder'
import StarIcon from '@material-ui/icons/Star'
import React from 'react'
import '../SearchResult.css'
import {  Link } from 'react-router-dom'


const SearchResult = (props) => {
 
    
    return( 
        
            <div className="searchResult">
                <FavoriteBorderIcon className="searchResult__heart" />

                <div className="searchResult__info">
                    <div className="searchResult__infoTop">
                        <p>{props.studio.neighborhood}</p>
                        <h3>{props.studio.name}</h3>
                        <p>____</p>
                            <p>{props.studio.description}</p>
                    </div>
                    <div className="searchResult__infoBottom">
                        <div className="searchResult__stars">
                            <StarIcon className="searchResult__star"/>
                            <p><strong>{4.4}</strong></p>
                            <div className="searchResult__button">
                                <Link to={{
                                    pathname: `/reservation/${props.studio.id}`,
                                    state: {
                                        studio: props.studio,
                                        user: props.user
                                    }
                                }}>Make a Reservation</Link>
                            </div>
                        </div>
                        <div className="searchResult__price">
                            <h2>${props.studio.price}/hr</h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    
 
}


export default SearchResult