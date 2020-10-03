import React, { Component } from 'react'
import '../SearchPage.css'
import { Button } from '@material-ui/core'
import SearchResultContainer from '../containers/SearchResultContainer'



const API = "http://localhost:3001/api/v1/studios"

class SearchPage extends Component {
    constructor(){
        super();
        this.state = {
            results: []
        }
    }


    componentDidMount(){
        fetch(API)
        .then(resp => resp.json())
        .then(obj => this.setState({ 
            results: obj.data
        }) )
    }

    render(){
        console.log(this.state)
        return( 
            <div className="searchPage">
                <div className="searchPage__info">
                    <p>{this.state.results.length}+ studios </p>
                    <h1>Studios nearby</h1>
                    <Button variant="outlined">Cancellation Flexibility</Button>
                    <Button variant="outlined">Type of Place</Button>
                    <Button variant="outlined">Price</Button>
                    <Button variant="outlined">Amenities</Button>
                    <Button variant="outlined">More Filters</Button>
                </div>
                <SearchResultContainer user={this.props.user} results={this.state.results} />
            </div>
        )
    }
}

export default SearchPage;