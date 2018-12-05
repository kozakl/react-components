import * as React from 'react';
import * as style from './Map.pcss';
import MapCore from './MapCore';
import {ReactElement} from 'react';
import {Marker} from 'react-google-maps';
import {classNames} from '@kozakl/utils';

export default function Map(props:Props)
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
}

interface Props {
    children?:ReactElement<Marker> |
              ReactElement<Marker>[];
    className?:string;
    defaultCenter: {
        lat:number;
        lng:number;
    };
}
