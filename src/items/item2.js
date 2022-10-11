import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

function Item2() {
    const mapStyles = {
        width: '100%',
        height: '100%',
    };
    const containerStyle = {
        width: '100%',
        height: '400px'
    };

    const center = {
        lat: -3.745,
        lng: -38.523
    };

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "YOUR_API_KEY"
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={map => {
                const bounds = new window.google.maps.LatLngBounds();
                map.fitBounds(bounds);
            }}
            onUnmount={map => {
                // do your stuff before map is unmounted
            }}
        >
            { /* Child components, such as markers, info windows, etc. */}
            <></>
            
        </GoogleMap>
    ) : <></>
}

export default Item2;