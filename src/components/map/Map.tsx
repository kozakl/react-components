import {FunctionComponent,
        ReactElement} from 'react';
import {Marker} from 'react-google-maps';
import {classNames} from '@kozakl/utils';
import MapCore from './MapCore';
import React from 'react';
import style from './Map.pcss';

const Map:FunctionComponent<Props> = (props)=>
{
    return (
        <div className={classNames(style.map, props.className)}>
            <MapCore
                loadingElement={<div className={style.element}/>}
                containerElement={<div className={style.element}/>}
                mapElement={<div className={style.element}/>}
                defaultCenter={props.defaultCenter}
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDtuxvcVrxLvP6mvd2TsLHIyaU-JFXhZK0&v=3">
                {props.children}
            </MapCore>
        </div>
    );
};

interface Props {
    children?:ReactElement<Marker> |
              ReactElement<Marker>[];
    className?:string;
    defaultCenter: {
        lat:number;
        lng:number;
    };
}

export default Map;
