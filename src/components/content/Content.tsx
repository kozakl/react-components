import {Redirect, Route, Switch} from 'react-router';
import {HashRouter} from 'react-router-dom';
import {AudioPlayerSample} from '../../pages/audio-player-sample';
import {BadgeSample} from '../../pages/badge-sample';
import {CarouselSample} from '../../pages/carousel-sample';
import {CheckboxSample} from '../../pages/checkbox-sample';
import {CrossfadeBgSample} from '../../pages/crossfade-bg-sample';
import {DialogSample} from '../../pages/dialog-sample';
import {ImagePreviewSample} from '../../pages/image-preview-sample';
import {LoginSample} from '../../pages/login-sample';
import {MapSample} from '../../pages/map-sample';
import {ModalSample} from '../../pages/modal-sample';
import {NavSample} from '../../pages/nav-sample';
import {ResponsiveImageSample} from '../../pages/responsive-image-sample';
import {Sidebar1Sample} from '../../pages/sidebar1-sample';
import {Sidebar2Sample} from '../../pages/sidebar2-sample';
import {SpinnerSample} from '../../pages/spinner-sample';
import {TextFieldSample} from '../../pages/text-field-sample';
import {TypewriterSample} from '../../pages/typewriter-sample';
import {Window1Sample} from '../../pages/window1-sample';
import React from 'react';

export default function Content()
{
    return (
        <HashRouter>
            <>
                <select
                    style={{position: 'fixed', top: '0'}}
                    defaultValue={location.hash}
                    onChange={(event)=>
                        window.location.href = event.target.value}>
                    <option value="#/audio-player">Audio Player</option>
                    <option value="#/badge">Badge</option>
                    <option value="#/carousel">Carousel</option>
                    <option value="#/checkbox">Checkbox</option>
                    <option value="#/crossfade-bg">Crossfade Bg</option>
                    <option value="#/dialog">Dialog</option>
                    <option value="#/image-preview">Image Preview</option>
                    <option value="#/login">Login</option>
                    <option value="#/map">Map</option>
                    <option value="#/modal">Modal</option>
                    <option value="#/nav">Nav</option>
                    <option value="#/responsive-image">Responsive Image</option>
                    <option value="#/sidebar1">Sidebar1</option>
                    <option value="#/sidebar2">Sidebar2</option>
                    <option value="#/spinner">Spinner</option>
                    <option value="#/text-field">Text Field</option>
                    <option value="#/typewriter">Typewriter</option>
                    <option value="#/window1">Window1</option>
                </select>
                <Switch>
                    <Redirect from="/" to='/audio-player' exact/>
                    <Route path="/audio-player" component={AudioPlayerSample}/>
                    <Route path="/badge" component={BadgeSample}/>
                    <Route path="/carousel" component={CarouselSample}/>
                    <Route path="/checkbox" component={CheckboxSample}/>
                    <Route path="/crossfade-bg" component={CrossfadeBgSample}/>
                    <Route path="/dialog" component={DialogSample}/>
                    <Route path="/image-preview" component={ImagePreviewSample}/>
                    <Route path="/login" component={LoginSample}/>
                    <Route path="/map" component={MapSample}/>
                    <Route path="/modal" component={ModalSample}/>
                    <Route path="/nav" component={NavSample}/>
                    <Route path="/responsive-image" component={ResponsiveImageSample}/>
                    <Route path="/sidebar1" component={Sidebar1Sample}/>
                    <Route path="/sidebar2" component={Sidebar2Sample}/>
                    <Route path="/spinner" component={SpinnerSample}/>
                    <Route path="/text-field" component={TextFieldSample}/>
                    <Route path="/typewriter" component={TypewriterSample}/>
                    <Route path="/window1" component={Window1Sample}/>
                </Switch>
            </>
        </HashRouter>
    );
}
