import React from 'react'
import SearchResult from '../components/SearchResult'
// import GoMap from '../components/Map'

const  SearchResultContainer = (props) => {


       return(
           <div>
               <React.Fragment>
               {props.results.map((result, index) => {
                   return <SearchResult key={index} {...result} />
               })}
               </React.Fragment>
               {/* <div>
                    <GoMap/>
               </div> */}
           </div>
        )
   
}

export default SearchResultContainer;