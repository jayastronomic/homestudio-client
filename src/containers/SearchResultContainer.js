import React from 'react'
import SearchResult from '../components/SearchResult'
import '../SearchResultContainer.css'
 import Map from '../components/map/Map'

const  SearchResultContainer = (props) => {


       return(
           <div className="searchResultContainer">
               
               <div className="searchResultContainer__results">
               {props.results.map((result, index) => {
                   return <SearchResult user={props.user} key={index} studio={result} />
               })}
               </div>
               <div className="searchResultContainer__map">
                        <Map results={props.results}/>
               </div>
           </div>
        )
   
}

export default SearchResultContainer;