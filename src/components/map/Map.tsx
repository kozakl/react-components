import {FunctionComponent} from 'react';
import {classNames} from '@kozakl/utils';
import {MapCore} from './map-core';
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
                options={props.options}
                defaultCenter={props.defaultCenter}
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDtuxvcVrxLvP6mvd2TsLHIyaU-JFXhZK0&v=3">
                {props.children}
            </MapCore>
        </div>
    );
};

interface Props {
    className?:string;
    options?:any
    defaultCenter: {
        lat:number;
        lng:number;
    };
}

export default Map;
