import React, { useState } from 'react'
import '../Banner.css'
import { Button } from '@material-ui/core'
import Search from './Search'
import { useHistory } from 'react-router-dom'

const Banner = () => {
    const history = useHistory()
    const [showSearch, setShowSearch] = useState(false)

    return(

        <div className="banner">
            <div className="banner__search" >
                <Button onClick={() => setShowSearch(!showSearch)} className="banner__searchButton" variant="outlined">{showSearch ? "Hide" : "Search"}</Button>
                {showSearch && <Search/>}
            </div>
            <div className="banner__info">
                <h1>Change the world with your sound</h1>
                <h5>There is no limit to where you can create. Find places near you to make your sound. </h5>
                <Button onClick={() => history.push('/search')} variant="outlined">Explore Nearby</Button>
            </div>
            
        </div>

    )
}

export default Banner;