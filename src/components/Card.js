import React from 'react';
import '../Card.css'


const Card = ({src, name, description, price}) => {
    return(
        <div className="card">
            <img src={src} alt="" />
            <div className="card__info">
                <h2>{name}</h2>
                <h4>{description}</h4>
                <h3>${price}/hr</h3>
            </div>

        </div>
    )
}
export default Card;