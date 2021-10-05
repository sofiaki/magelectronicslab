import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={16}
    defaultCenter={{ lat: 38.23657074834939, lng: 21.72718841115479 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 38.23657074834939, lng: 21.72718841115479 }} />}
  </GoogleMap>
))

export default MyMapComponent;