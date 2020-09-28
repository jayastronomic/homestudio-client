import React from 'react'
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'

const Map = () => {
    return <GoogleMap defaultZoom={10} defaultCenter={{lat: 41.878113, lng: -87.629799}}/>
}

const WrappedMap = withScriptjs(withGoogleMap(Map))



export default function GoMap(){
    return (
        <div  style={{width: "100wv", height: "100hv"}}>
            <WrappedMap googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyB3IXyEvHkokETHBHUfQK_hTLdmCBWEDDQ"}
                    loadingElement={<div style={{height: "100%"}} />}
                    containerElement={<div style={{height: "400px"}} />}
                    mapElement={<div style={{height: "100%"}} />}
            />
        </div>
    )
}