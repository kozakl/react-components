import * as React from 'react';
import * as style from './Content.pcss';
import {PureComponent} from 'react';
import {SpinnerSample} from '../../pages/spinner-sample';
import {AudioPlayerSample} from '../../pages/audio-player-sample';
import {CrossfadeBgSample} from '../../pages/crossfade-bg-sample';
import {ResponsiveImageSample} from '../../pages/responsive-image-sample';

export default class Content extends PureComponent<Props>
{
    onClick = ()=>
    {
        console.log(this.props.message);
    };
    
    render()
    {
        return (
            <div className={style.content}>
                <ResponsiveImageSample/>
            </div>
        );
    }
}

interface Props {
    message:string;
}
