import {FunctionComponent} from 'react';
import {GoogleMap, withGoogleMap,
        withScriptjs} from 'react-google-maps';
import React from 'react';

const MapCore:FunctionComponent<Props> = (props)=>
{
    const options = {
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
};

interface Props {
    defaultCenter: {
        lat:number;
        lng:number;
    };
}

export default withScriptjs(withGoogleMap(MapCore));
