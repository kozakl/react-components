import * as React from 'react';
import * as style from './Content.pcss';
import {PureComponent} from 'react';
import {SpinnerSample} from '../../pages/spinner-sample';
import {AudioPlayerSample} from '../../pages/audio-player-sample';
import {CrossfadeBgSample} from '../../pages/crossfade-bg-sample';
import {ResponsiveImageSample} from '../../pages/responsive-image-sample';
import DialogSample from '../../pages/dialog-sample/DialogSample';
import {HashRouter} from 'react-router-dom';
import {Route, Switch} from 'react-router';

export default class Content extends PureComponent<Props>
{
    onClick = ()=> {
        console.log(this.props.message);
    };
    
    render()
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
}

interface Props {
    message:string;
}
