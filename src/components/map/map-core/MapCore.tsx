import {FunctionComponent} from 'react';
import {GoogleMap, withGoogleMap,
        withScriptjs} from 'react-google-maps';
import React from 'react';

const MapCore:FunctionComponent<Props> = (props)=>
{
    return (
        <GoogleMap
            options={props.options}
            zoom={15}
            defaultCenter={props.defaultCenter}>
            {props.children}
        </GoogleMap>
    );
};

interface Props {
    options:any;
    defaultCenter: {
        lat:number;
        lng:number;
    };
}

export default withScriptjs(withGoogleMap(MapCore));
