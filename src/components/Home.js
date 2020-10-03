import React from 'react'
import '../Home.css'
import Banner from './Banner'
import  Card  from './Card'

const Home = (props) => {
    // console.log(props)
    return(
        <div className="home">
            <Banner/>

            <div className="home__section">
                {props.studios.slice(0, 3).map(studio => {
                    return <Card key={studio.id} src={studio.img} name={studio.name} description={studio.description} price={studio.price}  />
                })}
            </div>
            <div className="home__section">
            {props.studios.slice(3).map(studio => {
                    return <Card key={studio.id} src={studio.img} name={studio.name} description={studio.description} price={studio.price}  />
                })}
            </div>
        </div>

    )
}

export default Home;
