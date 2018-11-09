import * as React from 'react';
import {Route, Switch} from 'react-router';
import {HashRouter} from 'react-router-dom';
import {AudioPlayerSample} from '../../pages/audio-player-sample';
import {CrossfadeBgSample} from '../../pages/crossfade-bg-sample';
import {DialogSample} from '../../pages/dialog-sample';
import {ResponsiveImageSample} from '../../pages/responsive-image-sample';
import {SpinnerSample} from '../../pages/spinner-sample';

export default function Content()
{
    return (
        <HashRouter>
            <Switch>
                <Route path="/audio-player" component={AudioPlayerSample}/>
                <Route path="/crossfade-bg" component={CrossfadeBgSample}/>
                <Route path="/dialog" component={DialogSample}/>
                <Route path="/responsive-image" component={ResponsiveImageSample}/>
                <Route path="/spinner" component={SpinnerSample}/>
            </Switch>
        </HashRouter>
    );
}
