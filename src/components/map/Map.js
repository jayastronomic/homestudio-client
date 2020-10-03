import React from 'react'
import { useState } from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from 'react-google-maps'


function Map(props){

    const [selectedStudio, setSelectedStudio] = useState(null);

    return(
        <GoogleMap 
            defaultZoom={12} 
            defaultCenter={{ lat: 41.878113 , lng: -87.629799}}>
                {props.results.map(result => {
                    return <Marker key={result.id} position={{lat: result.latitude, lng: result.longitude}} onClick={()=> {setSelectedStudio(result)}} />
                }
                )}

               
                {selectedStudio && (<InfoWindow  position={{lat: selectedStudio.latitude, lng: selectedStudio.longitude}} onCloseClick={() => setSelectedStudio(null)}>
                    <div>
                        <h2>{selectedStudio.name}</h2>
                        <p>{selectedStudio.description}</p>
                        <img className="map-infoWindow-img" alt="" src={selectedStudio.img}/>
                        <p>_____________</p><br/>
                        <p>_____________</p><br/>
                        <p><strong>Address:</strong> {selectedStudio.street_address}</p>
                        <p><strong>Zip Code:</strong> {selectedStudio.zip_code}</p>
                        <p><strong>Neighborhood:</strong> {selectedStudio.neighborhood}</p>
                    </div>
                    </InfoWindow>)}
        </GoogleMap>
            
    )
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

 export default function M(props){
    return(
        <div style={{width: '50vw', height: '85vh'}}><WrappedMap 
            googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyB3IXyEvHkokETHBHUfQK_hTLdmCBWEDDQ"}
            loadingElement={<div style={{height: "100%"}} /> }
            containerElement={<div style={{height: "100%"}} />} 
            mapElement={ <div style={{ height: "100%"}} /> } 
            results={props.results}/>
        </div>
    )
}