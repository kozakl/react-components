import {FunctionComponent} from 'react';
import {GoogleMap, withGoogleMap,
        withScriptjs} from 'react-google-maps';
import React from 'react';

const MapCore:FunctionComponent<Props> = (props)=>
{
    return (
        <GoogleMap {...props}>
            {props.children}
        </GoogleMap>
    );
};

interface Props {
    options:any;
    zoom:number;
    defaultCenter: {
        lat:number;
        lng:number;
    };
}

export default withScriptjs(withGoogleMap(MapCore));
