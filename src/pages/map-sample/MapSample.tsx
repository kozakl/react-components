import {useState} from 'react';
import {InfoWindow, Marker} from 'react-google-maps';
import {Map} from '../../components/map';
import React from 'react';
import style from './MapSample.pcss';

export default function MapSample()
{
    const [infoWindow, setInfoWindow] = useState(false);
    
    const options = {
        fullscreenControl: false,
        mapTypeControl: false,
        streetViewControl: false
    };
    return (
        <Map
            className={style.map}
            options={options}
            zoom={15}
            defaultCenter={{lat: 51.1080513, lng: 17.0251989}}>
            <Marker
                position={{lat: 51.1098569, lng: 17.028251}}
                onClick={()=> setInfoWindow(true)}
                label={{text: 'A'}}
                title="Title Marker">
                {infoWindow &&
                    <InfoWindow onCloseClick={()=> setInfoWindow(false)}>
                        <div className={style.info}>
                            <h6>Lublin downtown</h6>
                            Ruska 65<br/>
                            50-072 Wrocław<br/>
                            Poland<br/>
                            <a target="_blank" href="https://www.google.pl/maps?q=Ruska+65+50-072+Wroc%C5%82aw&um=1&ie=UTF-8&sa=X&ved=0ahUKEwiw4a2g6djdAhXioosKHcmqDbUQ_AUICigB">
                                View on Google Maps
                            </a>
                        </div>
                    </InfoWindow>}
            </Marker>
        </Map>
    );
}
