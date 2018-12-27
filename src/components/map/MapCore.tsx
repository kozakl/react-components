import {ReactElement} from 'react';
import {GoogleMap, Marker,
        withGoogleMap, withScriptjs} from 'react-google-maps';
import React from 'react';
import theme from './theme.json';

function MapCore(props:Props)
{
    const options = {
        styles: theme.default,
        fullscreenControl: false,
        mapTypeControl: false,
        streetViewControl: false
    };
    return (
        <GoogleMap
            options={options}
            zoom={15}
            defaultCenter={props.defaultCenter}>
            {props.children}
        </GoogleMap>
    );
}

interface Props {
    children?:ReactElement<Marker> |
              ReactElement<Marker>[];
    defaultCenter: {
        lat:number;
        lng:number;
    };
}

export default withScriptjs(withGoogleMap(MapCore));
