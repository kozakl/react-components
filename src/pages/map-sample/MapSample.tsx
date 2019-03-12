import {PureComponent} from 'react';
import React from 'react';
import style from './MapSample.pcss';
import Marker from "react-google-maps/lib/components/Marker";
import InfoWindow from "react-google-maps/lib/components/InfoWindow";
import {Map} from "../../components/map";

export default class MapSample extends PureComponent<{}, State>
{
    constructor()
    {
        super(undefined);
        
        this.state = {
            marker: true,
            checkbox2: false,
            checkbox3: false
        };
    }
    
    onToggleMarker = ()=> {
        this.setState({marker: !this.state.marker});
    };
    
    render()
    {
        const options = {
            fullscreenControl: false,
            mapTypeControl: false,
            streetViewControl: false
        };
        return (
            <div className={style.checkboxSample}>
                <Map
                    className={style.map}
                    options={options}
                    zoom={15}
                    defaultCenter={{lat: 51.1080513, lng: 17.0251989}}>
                    <Marker
                        position={{lat: 51.1098569, lng: 17.028251}}
                        onClick={this.onToggleMarker}
                        label={{text: 'A'}}
                        title="Title Marker">
                        {this.state.marker &&
                            <InfoWindow onCloseClick={this.onToggleMarker}>
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
            </div>
        );
    }
}

interface State {
    marker:boolean;
    checkbox2:boolean;
    checkbox3:boolean;
}
